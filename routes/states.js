const express = require('express');
const passport = require('passport');
const Country = require('../models/Country');
const State = require('../models/State');

const router = express.Router();

router.post('/newState/:id', (req, res) => {
  Country.findById(req.params.id).then(country => {
    const newState = new State({
      name: req.body.name
    })
    newState.save().then(state => {
      country.states.push(state._id)
      country.save().then(() => res.json(state))
    }).catch(err => res.json(err));
  })
})

router.get('/allState', (req, res) => {
  State.find().populate('cities')
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

router.get('/edit/:id', function (req, res) {
  let id = req.params.id;
  State.findById(id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.post('/update/:id', function (req, res) {
  State.findByIdAndUpdate({ _id: req.params.id }, req.body).then(data => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  })
});

router.get('/delete/:id', (req, res) => {
  State.findByIdAndRemove({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => res.json(err));
})


module.exports = router;