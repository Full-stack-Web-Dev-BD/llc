const express = require('express');
const passport = require('passport');
const Country = require('../models/Country');

const router = express.Router();

router.post('/newCountry', (req, res) => {
  Country.findOne({ name: req.body.name })
    .then((country) => {
      if (country) return res.status(400).json({ message: 'Country Existing' })
      const newCountry = new Country({
        name: req.body.name
      })
      newCountry.save()
        .then(country => res.json(country))
        .catch(err => {
          console.log(err)
          res.json(err)
        });
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    });
})

router.get('/allCountry', (req, res) => {
  Country.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

router.get('/single/:id', function (req, res) {
  Country.findById(id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.post('/update/:id', function (req, res) {
  Country.findByIdAndUpdate({ _id: req.params.id }, req.body).then(data => {
    res.json(data)
  }).catch((err) => {
    console.log(err);
  })
});

router.get('/delete/:id', (req, res) => {
  Country.findByIdAndRemove({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => console.log(err));
})


module.exports = router;