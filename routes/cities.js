const express = require('express');
const passport = require('passport');
const State = require('../models/State');
const City = require('../models/City');


const router = express.Router();

router.post('/newCity/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  if (req.user.user_role === "admin") {
    console.log(req.body)
    State.findById(req.params.id).then(state => {
      const newCity = new City({
        name: req.body.name
      })
      newCity.save().then(city => {
        state.cities.push(city._id)
        state.save().then(() => res.json(city))
        .catch(err=>res.json(err))
      }).catch(err => res.json(err));
    })
  }
})

router.get('/allCity', passport.authenticate('jwt', { session: false }), (req, res) => {
  if (req.user.user_role === "admin") {
    City.find()
      .then(data => res.json(data))
      .catch(err => res.json(err))
  }
})

router.get('/edit/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  let id = req.params.id;
  if (req.user.user_role === "admin") {
    City.findById(id)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
});

router.post('/update/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
  if (req.user.user_role === "admin") {
    City.findByIdAndUpdate({ _id: req.params.id }, req.body).then(data => {
      res.json(data)
    }).catch((err) => {
      console.log(err);
    })
  }
});

router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  if (req.user.user_role === "admin") {
    City.findByIdAndRemove({ _id: req.params.id })
      .then(data => res.json(data))
      .catch(err => console.log(err));
  }
})


module.exports = router;