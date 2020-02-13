const mongoose = require('mongoose');
const User=require('./users');

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    from: {
        type: String,
        required: true,
        trim: true
    },
    to: {
        type: String,
        required: true,
        trim: true
    },
    fullname: {
        type: String,
        trim:true
    },
    phone: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        trim:true
    },
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:User
    }
});

module.exports = mongoose.model('Booking', bookingSchema);