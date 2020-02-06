const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    cityname: {
        type: String,
        required: true,
        trim:true
    }
});

module.exports = mongoose.model('City', citySchema);