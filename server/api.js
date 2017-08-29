'use strict'
const api = require('express').Router()
const db = require('../db')
const User = db.models.user;
const Campus = db.models.campus;

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

api.post('/users/', (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
  })
  .then((user) => {
    user.setCampus(req.body.campusId)
    return (
      db.sync()
      .then( () => user)
    )
  })
  .then( (user) => {
    res.json(user)
  })
})

api.delete('/users/:id', (req, res) => {
  User.findOne({
    where: {id: req.params.id}
  })
  .then( (user) => {
    user.destroy();
    res.status(204).end()
  })
})

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

api.post('/campuses/', (req, res) => {
  Campus.create({
    name: req.body.name,
    image: req.body.image,
  })
  .then((campus) => {
    res.json(campus)
  })
})

api.delete('/campuses/:id', (req, res) => {
  Campus.findOne({
    where: {id: req.params.id}
  })
  .then( (campus) => {
    User.destroy({
      where: {campusId: req.params.id}
    })
    campus.destroy();
    res.status(204).end()
  })
})

module.exports = api
