const express=require('express');
const passport=require('passport');
const Inventory=require('../models/Inventory');
const Product=require('../models/Product');

const router=express.Router();

router.post('/newInventory', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    const newInventory= new Inventory({
      name:req.body.name,
      department:req.body.department,
      user:req.body.user,
      type:req.body.type,
      unit:req.body.unit,
      purchaseCode:req.body.purchaseCode,
      materialSafetyCode:req.body.materialSafetyCode,
      quantity:req.body.quantity,
      alertLevel:req.body.alertLevel,
      tax:req.body.tax,
      purchase:false
    })
    newInventory.save()
    .then(inventory=> res.json(inventory))
    .catch(err=> {
      console.log(err)
    });
  }  
})

router.post('/:id/purchase', passport.authenticate('jwt', {session:false}), (req, res)=>{
  Product.findOne({name:req.body.name}).then(data=>{
    var errors={}
    if(req.body.quantity>data.quantity){
      errors.quantity="Your input quantity is not available";
      res.status(400).json(errors)
    }else{
      Inventory.findOne({name:req.body.name}).then(inventory=>{
        
        if(inventory && inventory.purchase==true){
          Inventory.updateOne({name:req.body.name}, {$set:{quantity:(inventory.quantity+req.body.quantity)}}).then(()=>{
            Inventory.findByIdAndDelete(req.params.id).then((deleteData)=>{
              res.json(deleteData);
            })
          }).then(()=>{
            Product.updateOne({name:req.body.name}, {$set:{quantity:(data.quantity-req.body.quantity)}}).then((invenData)=>{
              res.json(invenData)
            })
          })
        }else{
          Inventory.updateOne({_id:req.params.id}, {$set:{purchase:true}}).then(inventory=>{
            Product.updateOne({name:req.body.name}, {$set:{quantity:(data.quantity-req.body.quantity)}}).then(()=>{
              res.json(inventory)
            })
          })
        }
      })
    }
  }).catch(err=> res.json(err));
})

router.get('/purchaseOrder', passport.authenticate('jwt', {session:false}), (req, res)=>{
  Inventory.find({purchase:false}).populate('department').then(data=>{
    res.json(data)
  }).catch(err=>{
    res.json(err)
  })
})
router.get('/allInventory', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin"){
    Inventory.find({purchase:true}).populate('department')
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})

router.get('/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  let id = req.params.id;
  if(req.user.user_role==="admin"){
    Inventory.findById(id).populate('department')
    .then(data=> res.json(data))
    .catch(err=> res.json(err));
  }
});

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin"){
    Inventory.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
      res.json(data)
    }).catch((err)=>{
      console.log(err);
    })
  }  
});

router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin"){
    Inventory.findByIdAndRemove({_id:req.params.id})
      .then(data=> res.json(data))
      .catch(err=> console.log(err));
  }    
})


module.exports=router;