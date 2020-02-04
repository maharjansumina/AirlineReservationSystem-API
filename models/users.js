const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim:true
    },
    address: {
        type: String,
        required: true,
        trim:true
    },
    phone: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        trim:true
    },
    password: {
        type: String,
        required: true,
        trim:true
    
    },
    conpassword: {
        type: String,
        required: true,
        trim:true
    },
    image: {
        type: String
    },
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', userSchema);