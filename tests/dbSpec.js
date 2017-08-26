'use strict';

var Promise = require('bluebird');
var expect = require('chai').expect;
var Article = require('../db/models/user');
var Article = require('../db/models/campus');
var db = require('../db/models');



describe('The Campus model', function() {
  before(function() {
    return db.sync({
      force: true
    });
  });

  beforeEach(function() {
    var campus = Campus.build({
      name: 'Titan',
      image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Titan_in_true_color.jpg"
    });
  });

  afterEach(function() {
    return Promise.all([
      Campus.truncate({
        cascade: true
      }),
    ]);
  });

  describe('attributes definition', function() {
    it('includes `name` and `image` fields', function() {

      return campus.save()
        .then(function(savedCampus) {
          expect(savedCampus.name).to.equal('Titan');
          expect(savedCampus.image).to.equal('https://upload.wikimedia.org/wikipedia/commons/4/45/Titan_in_true_color.jpg');
        });

    });

    it('requires name to be a non-empty string', function() {

      campus.title = '';

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

// describe('The User model', function() {
//   before(function() {
//     return db.sync({
//       force: true
//     });
//   });

//   beforeEach(function() {
//     var campus = Campus.build({
//       name: 'Titan',
//       image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Titan_in_true_color.jpg"
//     });

//     var user = User.build({
//       name: 'Katerina Donlan',
//       email: "KaterinaDonlan@gunnerkrigg.ac.uk",
//       campusId: 1
//     });
//   });

//   afterEach(function() {
//     return Promise.all([
//       Campus.truncate({
//         cascade: true
//       }),
//       User.truncate({
//         cascade: true
//       }),
//     ]);
//   });

//   describe('attributes definition', function() {
//     it('includes `name` and `email` fields', function() {

//     return user.save()
//       .then(function(savedUser) {
//         expect(savedUser.name).to.equal('Katerina Donlan');
//         expect(savedUser.email).to.equal('KaterinaDonlan@gunnerkrigg.ac.uk');
//       });
//     });

//     it('requires name to be a non-empty string', function() {
//       user.name = '';

//       return user.validate()
//         .then(function() {
//           throw new Error('validation should fail when content is empty');
//         },
//         function(result) {
//           expect(result).to.be.an.instanceOf(Error);
//           expect(result.message).to.contain('Validation error');
//         });
//     });

//     it('requires email to be a non-empty string', function() {
//       user.email = '';

//       return user.validate()
//         .then(function() {
//           throw new Error('validation should fail when content is empty');
//         },
//         function(result) {
//           expect(result).to.be.an.instanceOf(Error);
//           expect(result.message).to.contain('Validation error');
//         });
//     });

//     it('requires email to be unique', function() {
//       user.save()
//         .then(() => {
//           const impostor = User.build({
//               name: 'impostor',
//               email: "KaterinaDonlan@gunnerkrigg.ac.uk",
//               campusId: 1
//           });

//           return impostor.validate()
//             .then(function() {
//               throw new Error('validation should fail when email is a duplicate');
//             })
//         })
//     });
//   })
// });
