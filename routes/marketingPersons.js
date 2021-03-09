const express=require('express');
const passport=require('passport');
const MarketingPerson=require('../models/MarketingPerson');

const router=express.Router();

router.post('/newMarketingPerson', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    const newMarketingPerson= new MarketingPerson(req.body)
    newMarketingPerson.save().then(mperson=>{
      res.json(mperson)
    })
    .catch(err=> res.json(err));
  }  
})

router.get('/allMarketingPerson', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    MarketingPerson.find()
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})



router.get('/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  let id = req.params.id;
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    MarketingPerson.findById(id)
    .then(data=> res.json(data))
    .catch(err=> res.json(err));
  }
});

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    MarketingPerson.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
      res.json(data)
    }).catch((err)=>{
      res.json(err);
    })
  }  
});

router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    MarketingPerson.findByIdAndRemove({_id:req.params.id})
      .then(data=> res.json(data))
      .catch(err=> res.json(err));
  }    
})


module.exports=router;