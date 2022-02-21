const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../../../server/app');
const baseUrl = '/api/v1/pet';
const { MongoMemoryServer } = require('mongodb-memory-server');
const MongoService = require('../../../services/db.service');

let mongod;

beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await MongoService.connectToDb(uri);
})

afterEach(async () => await MongoService.clearDb());

afterAll(async () => await Promise.all([MongoService.closeDb(), mongod.stop()]));

test('Should return all pets', async () => {
    await request(app)
        .post(baseUrl)
        .send({
            Name: 'ponzo',
            Age: '4',
            Type: 'dog',
            Color: 'white'
        })
        .expect(httpStatus.OK);

    const { body } = await request(app).get(baseUrl).expect(httpStatus.OK);
    expect(body[0].Name).toEqual('ponzo');
    expect(body[0].Age).toEqual(4);
    expect(body[0].Type).toEqual('dog');
    expect(body[0].Color).toEqual('white');
});