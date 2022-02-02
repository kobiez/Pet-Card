const mongoose = require('mongoose');

const petCardSchema = new mongoose.Schema({
    Name: String,
    Age: Number,
    Type: String,
    Color: String,

});

module.exports = mongoose.model('petCards', petCardSchema);