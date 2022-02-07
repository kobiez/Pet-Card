const supertest = require('supertest');
const httpStatus = require('http-status');
const base = require('./pet.router');
const request = supertest(base);
