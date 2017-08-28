'use strict';

var Promise = require('bluebird');
var Chai = require('chai')
const expect = Chai.expect;

var User = require('../db/models/user');
var Campus = require('../db/models/campus');
var db = require('../db');


describe('The Campus model', function() {
  before(function() {
    return db.sync({
      force: true
    });
  });

  var campus;

  beforeEach(function() {
    campus = Campus.build({
      name: 'Jupiter',
      image: "http://gunnerkrigg.com/comics/00000570.jpg"
    });
  });

  afterEach(function() {
    return Promise.all([
      User.truncate({ cascade: true }),
      Campus.truncate({ cascade: true })
    ]);
  });

  describe('attributes definition', function() {
    it('includes `name` and `image` fields', function() {

      return campus.save()
        .then(function(savedCampus) {
          expect(savedCampus.name).to.equal('Jupiter');
          expect(savedCampus.image).to.equal('http://gunnerkrigg.com/comics/00000570.jpg');
        });

    });

    it('requires name to be a non-empty string', function() {

      campus.name = '';

      return campus.validate()
        .then(function() {
            throw new Error('validation should fail when content is empty');
          },
          function(result) {
            expect(result).to.be.an.instanceOf(Error);
            expect(result.message).to.contain('Validation error');
          });

    });

  });
})

xdescribe('The User model', function() {
  before(function() {
    return db.sync({
      force: true
    });
  });

  var user;
  var campus;
  beforeEach(function() {
    campus = Campus.build({
      name: 'Jupiter',
      image: "http://gunnerkrigg.com/comics/00000570.jpg"
    });

    user = User.build({
      name: 'Katerina Donlan',
      email: "KaterinaDonlan@gunnerkrigg.ac.uk",
      campusId: 1
    });
  });

  afterEach(function() {
    return Promise.all([
      Campus.truncate({
        cascade: true
      }),
      User.truncate({
        cascade: true
      }),
    ]);
  });

  describe('attributes definition', function() {
    it('includes `name` and `email` fields', function() {

    return user.save()
      .then(function(savedUser) {
        expect(savedUser.name).to.equal('Katerina Donlan');
        expect(savedUser.email).to.equal('KaterinaDonlan@gunnerkrigg.ac.uk');
      });
    });

    it('requires name to be a non-empty string', function() { //this test is broken
      user.name = '';

      return user.validate()
        .then(function() {
          throw new Error('validation should fail when content is empty');
        },
        function(result) {
          console.log(result)
          expect(result).to.be.an.instanceOf(Error);
          expect(result.message).to.contain('Validation error');
        });
    });

    it('requires email to be a non-empty string', function() {
      user.email = '';

      return user.validate()
        .then(function() {
          throw new Error('validation should fail when content is empty');
        },
        function(result) {
          expect(result).to.be.an.instanceOf(Error);
          expect(result.message).to.contain('Validation error');
        });
    });

    it('requires email to be unique', function() {
      user.save()
        .then(() => {
          const impostor = User.build({
              name: 'impostor',
              email: "KaterinaDonlan@gunnerkrigg.ac.uk",
              campusId: 1
          });

          return impostor.validate()
            .then(function() {
              throw new Error('validation should fail when email is a duplicate');
            })
        })
    });
  })
});
