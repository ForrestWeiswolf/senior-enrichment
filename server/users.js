'use strict'
const usersRouter = require('express').Router()
const db = require('../db')
const User = db.models.user;

usersRouter.get('/users', (req, res) => {
  console.log('a')
  User.findAll()
  .then( (users) => {
    res.json(users)
  })
})

usersRouter.get('/users/:id', (req, res) => {
  User.findOne({
    where: {id: req.params.id}
  })
  .then( (user) => {
    res.json(user.dataValues)
  })
})

usersRouter.post('/users/', (req, res) => {
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

module.exports = usersRouter
