const mongoose = require('mongoose');
const cardSchema = require('./card');

const collectionSchema = new mongoose.Schema({
    cards: [cardSchema],
    storage: Array
    // allCategories: {
    //     binders: [{
    //     type: mongoose.Schema.ObjectId, 
    //     ref: 'Binder'
    //     }],
    //     complex: [{
    //         type: mongoose.Schema.ObjectId, 
    //         ref: 'Complex'
    //     }],
    //     boxes: [{
    //         type: mongoose.Schema.ObjectId, 
    //         ref: 'Box'
    //     }],
    //     decks: [{
    //         type: mongoose.Schema.ObjectId, 
    //         ref: 'Deck'
    //     }],
    //     cards: [{
    //         type: mongoose.Schema.ObjectId, 
    //         ref: 'Card'
    //     }]
    // }
    
})
module.exports = collectionSchema