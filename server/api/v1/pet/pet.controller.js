const petModel = require('./pet.model');

class petController {
    static async createPet(req, res, next) {
        try {
            const card = new petModel({
                Name: req.body.Name,
                Age: req.body.Age,
                Type: req.body.Type,
                Color: req.body.Color
            })
            await card.save()

            res.send(card)

        } catch (err) {
            console.error(err);
        }
    }

    static async getAllPets(req, res, next) {
        const allPets = await petModel.find();

        res.send(allPets);
    }
}

module.exports = petController;