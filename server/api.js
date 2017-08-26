'use strict'
const api = require('express').Router()
const db = require('../db')
const User = db.models.user;
const Campus = db.models.campus;

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/users', (req, res) => {
  User.findAll()
  .then( (users) => {
    res.json(users)
  })
})

api.get('/users/:id', (req, res) => {
  User.findOne({
    where: {id: req.params.id}
  })
  .then( (user) => {
    res.json(user.dataValues)
  })
})

// api.post('/users/', (req, res) => {
//   User.create({
//     name: req.params.name,
//     email: req.params.email,
//   })
//   .then((user) => { /
//     user.setCampus(req.params.campusId)
//     return(
//       db.sync()
//       .then( () => user)
//     )
//   })
//   .then( (user) => {
//     res.json(user)
//   })
// })

api.get('/campuses', (req, res) => {
  Campus.findAll()
  .then( (campuses) => {
    res.json(campuses)
  })
})

api.get('/campuses/:id', (req, res) => {
  Campus.findOne({
    where: {id: req.params.id}
  })
  .then( (campus) => {
    res.json(campus.dataValues)
  })
})

module.exports = api
