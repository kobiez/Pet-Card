require('dotenv').config();

const MongoService = require('./services/db.service');
MongoService.connectToDb(process.env.DB_CONNECTION);

const app = require('./app');

app.listen(process.env.LOCAL_PORT, () => {
    console.log(`Server is up on port: ${process.env.LOCAL_PORT}`)
});