/*
This is where we put] our mocha hooks
So far we will use just before and after to lift and stop our Sails server
FUTURE: use `beforeEach` or `afterEach` for testing models.
*/

var sails = require('sails');
var supertest = require('supertest');

// `done` let's mocha know that this is asynchronous
before(function (done) {
  // increase the mocha timeout so that Sails have enough time to lift
  this.timeout(5000);

  sails.lift({
    hooks: { grunt: false }, // load Sails without grunt hook
    log: { level: 'warn' }, // disable all logs except errors and warnings
    model: 'drop'
  }, (err) => {
    if (err) {return done(err);}
    global.sails = sails;
    global.supertest = supertest;
    return done();
  });
});

after((done) => {
  sails.lower(done);
});
