'use strict'
const api = require('express').Router()
const db = require('../db')
const campusesRouter = require('express').Router()
const Campus = db.models.campus;

campusesRouter.get('/campuses', (req, res) => {
  Campus.findAll()
  .then( (campuses) => {
    res.json(campuses)
  })
})

campusesRouter.get('/campuses/:id', (req, res) => {
  Campus.findOne({
    where: {id: req.params.id}
  })
  .then( (campus) => {
    res.json(campus.dataValues)
  })
})

campusesRouter.post('/campuses/', (req, res) => {
  console.log(req.body)
  Campus.create({
    name: req.body.name,
    image: req.body.image,
  })
  .then((campus) => {
    res.json(campus)
  })
})

module.exports = campusesRouter;
