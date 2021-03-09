const express=require('express');
const passport=require('passport');
const Product=require('../models/Product');

const router=express.Router();

router.post('/newProduct', passport.authenticate('jwt', {session:false}), (req, res)=>{
  console.log(req.body)
  if(req.user.user_role==="admin"){
    const newProduct= new Product({
      name:req.body.name,
      department:req.body.department,
      user:req.user.id,
      type:req.body.type,
      unit:req.body.unit,
      purchaseCode:req.body.purchaseCode,
      materialSafetyCode:req.body.materialSafetyCode,
      quantity:req.body.quantity,
      alertLevel:req.body.alertLevel,
      tax:req.body.tax
    })
    newProduct.save()
    .then(product=> res.json(product))
    .catch(err=> res.json(err));
  }  
})

router.get('/allProduct', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin"){
    Product.find().populate('department')
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})

router.get('/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  let id = req.params.id;
  if(req.user.user_role==="admin"){
    Product.findById(id).populate('department').populate('user')
    .then(data=> res.json(data))
    .catch(err=> res.json(err));
  }
});

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin"){
    Product.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
      res.json(data)
    }).catch((err)=>{
      console.log(err);
    })
  }  
});

router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    Product.findByIdAndRemove({_id:req.params.id})
      .then(data=> res.json(data))
      .catch(err=> console.log(err));
  }    
})


module.exports=router;