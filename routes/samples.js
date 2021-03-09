const express=require('express');
const passport=require('passport');
const Sample=require('../models/Sample');

const router=express.Router();

router.post('/newSample', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    const newSample= new Sample({
      type:req.body.type,
      container:req.body.container,
      containerCapColor:req.body.containerCapColor,
      storageTemperature:req.body.storageTemperature,
      storageDuration:req.body.storageDuration,
      importantInfo:req.body.inportantInfo
    })
    newSample.save()
    .then(sample=> res.json(sample))
    .catch(err=> res.json(err));
  }  
})

router.get('/allSample', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    Sample.find()
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})

router.get('/edit/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  let id = req.params.id;
  if(req.user.user_role==="admin"){
    Sample.findById(id)
    .then(data=> res.json(data))
    .catch(err=> res.json(err));
  }
});

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin"){
    Sample.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
      res.json(data)
    }).catch((err)=>{
      console.log(err);
    })
  }  
});

router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    Sample.findByIdAndRemove({_id:req.params.id})
      .then(data=> res.json(data))
      .catch(err=> console.log(err));
  }    
})


module.exports=router;