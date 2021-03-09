const express=require('express');
const passport=require('passport');
const Category=require('../models/Category');
const Department=require('../models/Department')

const router=express.Router();

router.post('/:departmentId/newCategory', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    Department.findById(req.params.departmentId).then(department=>{
      const newCategoy= new Category({
        name:req.body.name,
        revenueTarget:req.body.revenueTarget
      })
      newCategoy.save().then(category=>{
        department.categories.push(category._id)
        department.save(()=> res.json(category))
      }).catch(err=> res.json(err));
    }).catch(err=>{
      res.json(err)
    })
  }  
})

router.get('/allCategory', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    Category.find()
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})

router.get('/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  let id = req.params.id;
  if(req.user.user_role==="admin"){
    Category.findById(id)
    .then(data=> res.json(data))
    .catch(err=> res.json(err));
  }
});

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin"){
    Category.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
      res.json(data)
    }).catch((err)=>{
      console.log(err);
    })
  }  
});

router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    Category.findByIdAndRemove({_id:req.params.id})
      .then(data=> res.json(data))
      .catch(err=> res.json(err));
  }    
})


module.exports=router;