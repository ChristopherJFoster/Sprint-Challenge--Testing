const express = require('express');

let games = require('../data/games');

const server = express();

server.use(express.json());

server.get('/games', (req, res) => {
  res.status(200).json(games);
});

module.exports = server;
