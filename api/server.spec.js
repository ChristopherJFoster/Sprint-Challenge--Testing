const request = require('supertest');

const server = require('./server');

describe('/games', () => {
  describe('GET /games', () => {
    it('res.body should be an array even if there are no games', async () => {
      const res = await request(server).get('/games');
      expect(res.body).toHaveLength(0);
      expect(Array.isArray(res.body)).toBe(true);
    });

    it('res.body should an array of length one', async () => {
      await request(server)
        .post('/games')
        .send({ title: 'Donkey Kong', genre: 'arcade' });
      const res = await request(server).get('/games');
      expect(res.body).toHaveLength(1);
    });

    it('status code should be 200 OK', async () => {
      const res = await request(server).get('/games');
      expect(res.status).toBe(200);
    });
  });

  describe('POST /games', () => {
    it('status code should be 201 Created', async () => {
      const res = await request(server)
        .post('/games')
        .send({ title: 'Pac-Man', genre: 'arcade' });
      expect(res.status).toBe(201);
    });

    it('res.type should be JSON', async () => {
      const res = await request(server)
        .post('/games')
        .send({ title: 'Dig Dug', genre: 'arcade' });
      expect(res.type).toBe('application/json');
    });

    it("res.body should equal { title: 'Defender', genre: 'arcade' }", async () => {
      const res = await request(server)
        .post('/games')
        .send({ title: 'Defender', genre: 'arcade' });
      expect(res.body).toEqual({ title: 'Defender', genre: 'arcade' });
    });

    it('should add a game to games array if proper request is made', async () => {
      let games = await request(server).get('/games');
      expect(games.body).toHaveLength(4);
      const res = await request(server)
        .post('/games')
        .send({ title: 'Frogger', genre: 'arcade' });
      games = await request(server).get('/games');
      expect(games.body).toHaveLength(5);
    });

    it('status code should be 422 if properties are missing', async () => {
      const res = await request(server).post('/games');
      expect(res.status).toBe(422);
    });

    it('status code should be 405 if title already exists in games db', async () => {
      const res = await request(server)
        .post('/games')
        .send({ title: 'Donkey Kong', genre: 'arcade' });
      expect(res.status).toBe(405);
    });
  });
});
