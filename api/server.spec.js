const request = require('supertest');

const server = require('./server');

let games = require('../data/games');

describe('/games', () => {
  describe('POST /games', () => {
    beforeEach(() => {
      // equivalent of truncate()
      games = [];
    });

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

    it('status code should be 422 if properties are missing', async () => {
      const res = await request(server).post('/games');
      expect(res.status).toBe(422);
    });
  });

  describe('GET /games', () => {
    it('status code should be 200 OK', async () => {
      const res = await request(server).get('/games');
      expect(res.status).toBe(200);
    });

    it('res.type should be an array', async () => {
      const res = await request(server).get('/games');
      // Probably the wrong syntax:
      expect(res.type).toBe('array');
    });

    it('res.body should an array with one game object', async () => {
      const res = await request(server).get('/games');
      expect(res.body).toEqual([
        {
          title: 'Pacman',
          genre: 'Arcade',
          releaseYear: 1980
        }
      ]);
    });
  });
});
