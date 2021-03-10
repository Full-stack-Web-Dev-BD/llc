const express = require('express');
const passport = require('passport');
const State = require('../models/State');
const City = require('../models/City');


const router = express.Router();

router.post('/newCity/:id', (req, res) => {
  console.log(req.body)
  State.findById(req.params.id).then(state => {
    const newCity = new City({
      name: req.body.name
    })
    newCity.save().then(city => {
      state.cities.push(city._id)
      state.save().then(() => res.json(city))
        .catch(err => res.json(err))
    }).catch(err => res.json(err));
  })
})

router.get('/allCity', (req, res) => {
  City.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

router.get('/edit/:id', function (req, res) {
  City.findById(id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.post('/update/:id', function (req, res) {
  City.findByIdAndUpdate({ _id: req.params.id }, req.body).then(data => {
    res.json(data)
  }).catch((err) => {
    console.log(err);
  })
});

router.get('/delete/:id', (req, res) => {
  City.findByIdAndRemove({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => console.log(err));
})


module.exports = router;