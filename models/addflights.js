const mongoose = require('mongoose');
const City=require('./citys');

const flightSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref:City
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref:City
    },
    time: {
        type: String,
        required: true,
        trim:true
    }
});

module.exports = mongoose.model('AddFlight', flightSchema);