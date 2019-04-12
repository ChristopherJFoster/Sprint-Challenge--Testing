const request = require('supertest');

const server = require('./server');

let games = require('../data/games');

describe('/games', () => {
  beforeEach(() => {
    // equivalent of truncate()
    games = [];
  });

  describe('POST /games', () => {
    it('status code should be 201 Created', async () => {
      const res = await request(server)
        .post('/games')
        .send({ title: 'Donkey Kong', genre: 'platformer' });
      expect(res.status).toBe(201);
    });

    it('res.type should be JSON', async () => {
      const res = await request(server)
        .post('/games')
        .send({ title: 'Donkey Kong', genre: 'platformer' });
      expect(res.type).toBe('application/json');
    });

    it("res.body should equal { title: 'Donkey Kong', genre: 'platformer' }", async () => {
      const res = await request(server)
        .post('/games')
        .send({ title: 'Donkey Kong', genre: 'platformer' });
      expect(res.body).toEqual({ title: 'Donkey Kong', genre: 'platformer' });
    });

    it('should add a game to games array if proper request is made', async () => {
      expect(games).toHaveLength(0);
      const res = await request(server)
        .post('/games')
        .send({ title: 'Donkey Kong', genre: 'platformer' });
      expect(games).toHaveLength(1);
    });

    it('status code should be 400 if properties are missing', async () => {
      const res = await request(server).post('/games');
      expect(res.status).toBe(400);
    });
  });
});
