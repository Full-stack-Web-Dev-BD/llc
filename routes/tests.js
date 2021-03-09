const express = require('express');
const passport = require('passport');
const Test = require('../models/Test');
const router = express.Router();

router.post('/newTest', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('calling');
  if (req.user.user_role === "admin") {
    const newTest=new Test(req.body)
    newTest.save().then(test=>{
      res.json(test)
    }).catch(err=>{
      res.json(err)
    })
  }
})

router.get('/allTest', passport.authenticate('jwt', { session: false }), (req, res)=>{
  Test.find().then(data=>{
    res.json(data)
  }).catch(err=>{
    res.json(err)
  })
})

router.get('/:id', passport.authenticate('jwt', { session: false}), (req, res)=>{
  Test.findById(req.params.id).then(data=>{
    res.json(data)
  }).catch(err=>{
    res.json(err)
  })
})

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin"){
    Test.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
      res.json(data)
    }).catch((err)=>{
      res.json(err)
    })
  }  
});

router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    Test.findByIdAndRemove({_id:req.params.id})
      .then(data=> res.json(data))
      .catch(err=> res.json(err));
  }    
})
module.exports = router;