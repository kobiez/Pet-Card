const express = require('express');
const petController = require('./pet.controller');

const router = express.Router();

router.post('/', petController.createPet);
router.get('/', petController.getAllPets);

module.exports = router;