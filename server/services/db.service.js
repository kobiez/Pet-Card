const mongoose = require('mongoose');
require('dotenv').config();

class MongoService {
    static async connectToDb(uri) {
        try {
            await mongoose.connect(uri);
            console.log('Successfully connected to DB');
        } catch (error) {
            console.error(error);
        }
    }

    static async clearDb() {
        await mongoose.connection.dropDatabase();
    }

    static async closeDb() {
        await mongoose.connection.close();
    }
}

module.exports = MongoService;