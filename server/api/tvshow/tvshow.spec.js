'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/tvshows', function() {

  it('should fail when not logged in', function(done) {
    request(app)
      .get('/api/tvshows')
      .expect(401)
      .expect('Content-Type', /text/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Object);
        done();
      });
  });
});
