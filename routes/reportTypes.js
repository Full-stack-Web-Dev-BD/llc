const express=require('express');
const passport=require('passport');
const ReportType=require('../models/ReportType')

const router=express.Router();

router.post('/newReportType', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    const newReportType=new ReportType({name:req.body.name})
    newReportType.save().then(data=>{
      res.json(data)
    }).catch(err=>{
      res.json(err)
    })
  }  
})

router.get('/allReportType', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    ReportType.find()
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})

router.get('/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  let id = req.params.id;
  if(req.user.user_role==="admin"){
    ReportType.findById(id)
    .then(data=> res.json(data))
    .catch(err=> res.json(err));
  }
});

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin"){
    ReportType.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
      res.json(data)
    }).catch((err)=>{
      console.log(err);
    })
  }  
});

router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    ReportType.findByIdAndRemove({_id:req.params.id})
      .then(data=> res.json(data))
      .catch(err=> res.json(err));
  }    
})


module.exports=router;