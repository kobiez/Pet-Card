const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors())
app.use(express.json())

const petList = [];

app.post('/api/pet', (req, res) => {
    const petInput = req.body.petCard;
    petList.push(petInput)
})

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`)
})

