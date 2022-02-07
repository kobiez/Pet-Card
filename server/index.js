const express = require('express');
const cors = require('cors')
const runMongo = require('./api/v1/db/service/dbservice')
require('dotenv').config();

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/v1/pet', require('./api/v1/pet.router'))
app.use(runMongo(), runMongo);

app.listen(process.env.LOCAL_PORT, () => {
    console.log(`Server is up on port: ${process.env.LOCAL_PORT}`)
})