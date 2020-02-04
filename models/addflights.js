const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
        trim:true
    },
    to: {
        type: String,
        required: true,
        trim:true
    },
    time: {
        type: String,
        required: true,
        trim:true
    }
});

module.exports = mongoose.model('AddFlight', userSchema);