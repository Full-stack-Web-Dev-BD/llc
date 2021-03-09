const express=require('express');
const passport=require('passport');
const Staff=require('../models/Staff');
const User=require('../models/User');

const router=express.Router();

router.post('/newStaff', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin"){
    console.log(req.body)
    const newStaff= new Staff(req.body)
    newStaff.save()
    .then(staff=>{
      const newUser= new User({
				name    :staff.firstName + staff.lastName,
				email   :staff.email,
				//photo:req.file.path,
				user_role:staff.user_role,
				password:staff.password
			})

			bcrypt.genSalt(10, (err,salt)=>{
				bcrypt.hash(newUser.password, salt, (err,hash)=>{
					if(err) throw err;
					newUser.password=hash;
					newUser.save()
					.then((user)=>{
						res.json(user);
					})
					.catch((err)=>{
						console.log(err);
					})
				})

			})
    })
    .catch(err=> res.json(err));
  }  
})

router.get('/allStaff', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin"){
    Staff.find()
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})

router.get('/staff/:branchId', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin"){
    Staff.find({branchId:req.params.branchId})
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})

router.get('/edit/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  let id = req.params.id;
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin"){
    Staff.findById(id)
    .then(data=> res.json(data))
    .catch(err=> res.json(err));
  }
});

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin"){
    Staff.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
      res.json(data)
    }).catch((err)=>{
      console.log(err);
    })
  }  
});

router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin"){
    Staff.findByIdAndRemove({_id:req.params.id})
      .then(data=> res.json(data))
      .catch(err=> console.log(err));
  }    
})


module.exports=router;