const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const userRouter = require('./routes/users');
const contactRouter = require('./routes/contacts');
const addflightRouter = require('./routes/addflight');
const cityRouter = require('./routes/citys');
const bookingRouter = require('./routes/bookings');
const dotenv = require('dotenv').config();
const uploadRouter = require('./routes/upload');
const auth = require('./auth');
const cors = require('cors');
const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.options('*', cors());
let allowCrossDomain = function(req, res, next){
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Headers',"*");
    next();
}
app.use(allowCrossDomain);
app.use(express.urlencoded({extended: true }));

app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then((db) => {
        console.log("Successfully connected to MongodB server");
    }, (err) => console.log(err));

app.use('/users', userRouter);
app.use('/upload', uploadRouter);
app.use('/contact', contactRouter);
app.use('/addflight', addflightRouter);
app.use('/city', cityRouter);
app.use('/booking', bookingRouter);
// app.use(auth.verifyUser);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.statusCode = 500;
    res.json({ status: err.message });
});

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});
