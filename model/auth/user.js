const mongoose = require('mongoose');
const collectionSchema = require('../collection');

const userSchema = new mongoose.Schema({
    googleID: String,
    collection: collectionSchema

})

module.exports = mongoose.model('User', userSchema);