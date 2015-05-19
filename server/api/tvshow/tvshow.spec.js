'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var server = request.agent('http://localhost:9000');

describe('GET /api/tvshows', function() {

  var token;

  it('should fail when not logged in', function(done) {
    server
      .get('/api/tvshows')
      .expect(401)
      .expect('Content-Type', /text/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        done();
      });
  });

  it('should allow authentication', function(done) {
    server
      .post('/auth/local')
      .send({ email: 'test@test.com', password: 'test'})
      .expect(200)
      .end(function(err, res) {
        should.exist(res.body.token);
        token = res.body.token;
        return done();
      })
  })

  it('should fetch tvshows when authenticated', function(done) {
    server
      .get('/api/tvshows')
      .set('authorization', 'Bearer ' + token)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        done();
      });
  })
});
