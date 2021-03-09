const express=require('express');
const passport=require('passport');
const Country=require('../models/Country');

const router=express.Router();

router.post('/newCountry', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    console.log(req.body)
    const newCountry= new Country({
      name:req.body.name
    })
    newCountry.save()
    .then(country=> res.json(country))
    .catch(err=> {
      console.log(err)
      res.json(err)
    });
  }  
})

router.get('/allCountry', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    Country.find()
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})

router.get('/edit/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  let id = req.params.id;
  if(req.user.user_role==="admin"){
    Country.findById(id)
    .then(data=> res.json(data))
    .catch(err=> res.json(err));
  }
});

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin"){
    Country.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
      res.json(data)
    }).catch((err)=>{
      console.log(err);
    })
  }  
});

router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    Country.findByIdAndRemove({_id:req.params.id})
      .then(data=> res.json(data))
      .catch(err=> console.log(err));
  }    
})


module.exports=router;