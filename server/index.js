const express = require('express');
const cors = require('cors')
const petModel = require('./db/index');
const mongoose = require('mongoose');

const app = express();
const port = 8000;

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/pet-cards', () => console.log('Connected to DB'))

const petList = [];

app.post('/api/pet', (req, res) => {
    const petInput = req.body;
    petList.push(petInput);
    console.log(petList);

    const card = new petModel({
        Name: req.body.Name,
        Age: req.body.Age,
        Type: req.body.Type,
        Color: req.body.Color
    })

    card.save()
        .then(data => {
            console.log('Success to this card: ', data)
        })
        .catch(err => {
            console.error(err)
        });

    res.send('New pet card recieved!!')
})

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`)
})