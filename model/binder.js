const mongoose = require('mongoose');

const binderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        default: 0
    },
    forTrade:{
        type: Boolean,
        default: true
    },
    cards: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Card'
        }
    ]
})