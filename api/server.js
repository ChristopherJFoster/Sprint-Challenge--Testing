const express = require('express');

const db = require('../data/games');

const server = express();

server.use(express.json());

module.exports = server;
