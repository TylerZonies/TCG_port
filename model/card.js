const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    set: {
        type: String,
        required: true
    },
    foil: Boolean,
    location: String,
    price: Number
})

module.exports = cardSchema