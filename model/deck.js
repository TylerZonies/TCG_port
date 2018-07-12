const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
    name: String,
    mainBoard: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    }],
    sideBoard: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    },
    
})