var request = require('supertest');

describe('Server', () => {
  let server

  beforeEach(function () {
    delete require.cache[require.resolve('./server')]
    server = require('./server')
  })

  afterEach(function (done) {
    server.close(done)
  })

  describe('GET /', () => {
    it('should respond', (done) => {
      request(server)
        .get('/')
        .expect(200, done)
    })
  })

})