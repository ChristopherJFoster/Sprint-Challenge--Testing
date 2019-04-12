const express = require('express');

const Games = require('../models/gamesModel');

const server = express();

server.use(express.json());

module.exports = server;
