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
        .send({ title: 'Donkey Kong', genre: 'platformer' });
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
      let gamesCheck = await request(server).get('/games');
      expect(gamesCheck.body).toHaveLength(4);
      const res = await request(server)
        .post('/games')
        .send({ title: 'Donkey Kong', genre: 'platformer' });
      gamesCheck = await request(server).get('/games');
      expect(gamesCheck.body).toHaveLength(5);
    });

    it('status code should be 422 if properties are missing', async () => {
      const res = await request(server).post('/games');
      expect(res.status).toBe(422);
    });
  });
});
