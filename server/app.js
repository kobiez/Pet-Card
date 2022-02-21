const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/v1/pet', require('./api/v1/pet/pet.router'))

module.exports = app;