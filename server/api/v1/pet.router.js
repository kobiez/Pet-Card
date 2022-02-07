const express = require('express');
const petModel = require('./db/model/pet.model');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const card = new petModel({
            Name: req.body.Name,
            Age: req.body.Age,
            Type: req.body.Type,
            Color: req.body.Color
        })
        const savedCard = await card.save()

        res.send(card)

    } catch (err) {
        console.error(err);
    }
})

module.exports = router;