process.env.NODE_ENV = 'test';

var mongoose = require('mongoose');
var chai = require('chai');
var should = chai.should();
var app = require('../../../app.js');
var User = require('../../../app/models/users.js');

describe('User', function() {
  'use strict';

  var user;

  before(function(done) {
    User.collection.drop();
    done();
  });

  after(function(done) {
    User.collection.drop();
    done();
  });

  it('should validate the username as present', function(done) {
    user = new User({ username: "", email: "test@test.com", password: "Password" });
    user.save(function(err) {
      err.errors.username.message.should.equal('Username is required.');
      done();
    });
  });

  it('should reject the username if it is less than three characters long', function(done) {
    user = new User({ username: "dz", email: "test@test.com", password: "Password" });
    user.save(function(err) {
      err.errors.username.message.should.equal('Username must be three characters or longer.');
      done();
    });
  });

  it('should validate the email as present', function(done) {
    user = new User({ username: "Testy McTestface", email: "test@test.com", password: "Password" });
    user.save(function(err) {
      err.errors.username.message.should.equal('Email is required.');
      done();
    });
  });
});
