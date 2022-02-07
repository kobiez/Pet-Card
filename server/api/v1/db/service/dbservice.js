const mongoose = require('mongoose');
require('dotenv').config();

function runMongo() {
    return mongoose.connect(process.env.DB_CONNECTION, () => console.log('Connected to DB'))
};

module.exports = runMongo;
