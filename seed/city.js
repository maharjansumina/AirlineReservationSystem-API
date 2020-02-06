const mongoose = require ('mongoose');
var City = require('../models/city');

mongoose.connect("mongodb://127.0.0.1:27017/airlinereservationsystemdb",{ useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false});

let defaultCity = [
    new City({
        cityname: "Kathmandu"
    }),
    new City({
        cityname: "Pokhara"
    }),
    new City({
        cityname: "Janakpur"
    }),
    new City({
        cityname: "Birtnagar"
    }),
    new City({
        cityname: "Nepalgunj"
    }),
    new City({
        cityname: "Butwal"
    }),
];

var seeded = 0;

for (var i = 0; i < defaultCity.length; i++){
    defaultCity[i].save((error, result) => {
        seeded++;
        if (seeded === defaultCity.length){
            console.log("Default City seeded...");
            mongoose.disconnect();
        }
    });
}