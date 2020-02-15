const request = require('supertest');

const server = require('../src/server');

describe('GET /api', () => {
  it('returns a NOT FOUND message', (done) => {
    request(server)
      .get('/api/')
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(404, done);
  });
});

describe('GET /api/estreamers', () => {
  it('returns a 200', (done) => {
    request(server)
      .get('/api/estreamers')
      .set('Accept', 'application/json')
      .expect(200, done);
  });

  it('returns a 429 code on multiple request within 10 seconds', (done) => {
    request(server)
      .get('/api/estreamers')
      .set('Accept', 'application/json')
      .expect(429, done);
  });

  it('returns a 200 after waiting 10 seconds', (done) => {
    setTimeout(() => {
      request(server)
        .get('/api/estreamers')
        .set('Accept', 'application/json')
        .expect(200, done);
    }, 10000);
  }).timeout(12000);
});
