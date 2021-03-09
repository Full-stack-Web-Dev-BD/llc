const express=require('express');
const passport=require('passport');
const ReferralCenter=require('../models/ReferralCenter');

const router=express.Router();

router.post('/newReferringCenter', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    const newReferringCenter= new ReferralCenter(req.body)
    newReferringCenter.save()
    .then(rcenter=>{
      res.json(rcenter)
      // const newUser= new User({
			// 	name    :rcenter.nameofReferralCenter,
			// 	email   :rcenter.centerEmail,
			// 	user_role:rcenter.user_role,
			// 	password:rcenter.password
			// })

			// bcrypt.genSalt(10, (err,salt)=>{
			// 	bcrypt.hash(newUser.password, salt, (err,hash)=>{
			// 		if(err) throw err;
			// 		newUser.password=hash;
			// 		newUser.save()
			// 		.then((user)=>{
			// 			res.json(rcenter);
			// 		})
			// 		.catch((err)=>{
			// 			res.json(err);
			// 		})
			// 	})

			// })
    })
    .catch(err=> res.json(err));
  }  
})

router.get('/allReferringCenter', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    ReferralCenter.find()
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})



router.get('/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    ReferralCenter.findById(req.params.id)
    .then(data=> res.json(data))
    .catch(err=> res.json(err));
  }
});

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    ReferralCenter.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
      res.json(data)
    }).catch((err)=>{
      console.log(err);
    })
  }  
});

router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    ReferralCenter.findByIdAndRemove({_id:req.params.id})
      .then(data=> res.json(data))
      .catch(err=> console.log(err));
  }    
})


module.exports=router;