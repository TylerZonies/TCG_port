const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    set: {
        type: String,
        required: true
    },
    location: String,
    price: Number
})

module.exports = cardSchema