const express=require('express');
const passport=require('passport');
const Inventory=require('../models/Inventory');
const BranchInventory=require('../models/BranchInventory');

const router=express.Router();

router.post('/newBranchInventory', passport.authenticate('jwt', {session:false}), (req, res)=>{
    if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin"){
      Inventory.findOne({name:req.body.name}).then(data=>{
          var errors={}
          if(req.body.quantity>data.quantity){
              errors.quantity="Your input quantity is not available";
              res.status(400).json(errors)
          }else{
            BranchInventory.findOne({name:req.body.name}).then(branchInventory=>{
              if(branchInventory){
                BranchInventory.updateOne({name:req.body.name}, {$set:{quantity:(branchInventory.quantity+parseInt(req.body.quantity))}}).then(()=>{
                  Inventory.updateOne({name:req.body.name},
                      {$set:{
                          quantity:(data.quantity-req.body.quantity)
                      }}
                  ).then(inventory=>{
                      res.json(inventory)
                  })
                })
              }else{
                const newBranchInventory= new BranchInventory(req.body)
                newBranchInventory.save()
                .then(branchInventory=>{
                  var quantity=parseInt(req.body.quantity)
                  Inventory.updateOne({name:req.body.name},
                      {$set:{
                          quantity:(data.quantity-req.body.quantity)
                      }}
                  ).then(inventory=>{
                      res.json(inventory)
                  })
                })
              }
            })
        }
      }).catch(err=> res.json(err));
    }  
})

router.get('/allBranchInventory', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin"){
    BranchInventory.find().populate('department')
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})

router.get('/:branchId/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  let id = req.params.id;
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin"){
    BranchInventory.findById(id)
    .then(data=> res.json(data))
    .catch(err=> res.json(err));
  }
});

router.post('/:branchId/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin"){
    BranchInventory.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
      res.json(data)
    }).catch((err)=>{
      console.log(err);
    })
  }  
});

router.delete('/:branchId/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin"){
    BranchInventory.findByIdAndRemove({_id:req.params.id})
      .then(data=> res.json(data))
      .catch(err=> console.log(err));
  }    
})


module.exports=router;