const request = require('supertest');

const server = require('../src/server');

describe('server', () => {
  it('responds with a not found message', (done) => {
    request(server)
      .get('/no-existe-esta-ruta')
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(404, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(server)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(200, { message: '¡Hola mundo, vamos a probar deploys automaticos a Now.sh!' }, done);
  });
});
