const express = require('express');

let games = require('../data/games');

const server = express();

server.use(express.json());

server.get('/games', (req, res) => {
  res.status(200).json(games);
});

server.post('/games', (req, res) => {
  const { title, genre, releaseYear } = req.body;
  if (!title || !genre) {
    res.status(422).json({ error: 'You must provide a title and genre.' });
  } else {
    games.push(req.body);
    res.status(201).json({ title, genre, releaseYear });
  }
});

module.exports = server;
