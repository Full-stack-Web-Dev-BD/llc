const express=require('express');
const passport=require('passport');
const Department=require('../models/Department');

const router=express.Router();

router.post('/newDepartment', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    console.log(req.body)
    const newDepartment= new Department({
      name:req.body.name,
      revenueTarget:req.body.revenueTarget
    })
    newDepartment.save()
    .then(department=> res.json(department))
    .catch(err=> res.json(err));
  }  
})

router.get('/allDepartment', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    Department.find()
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})

router.get('/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  let id = req.params.id;
  if(req.user.user_role==="admin"){
    Department.findById(id)
    .then(data=> res.json(data))
    .catch(err=> res.json(err));
  }
});

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin"){
    Department.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
      res.json(data)
    }).catch((err)=>{
      console.log(err);
    })
  }  
});

router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    Department.findByIdAndRemove({_id:req.params.id})
      .then(data=> res.json(data))
      .catch(err=> console.log(err));
  }    
})


module.exports=router;