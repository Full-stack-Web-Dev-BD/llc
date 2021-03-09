const express=require('express');
const passport=require('passport');
const bcrypt=require('bcryptjs');

const PatientTest=require('../models/PatientTest');
const router=express.Router();

const getBillId=(data)=>{
  if(data.toString().length==1){
    return ('000' + data).slice(-4)
  }else if(data.toString().length==2){
    return ('00' + data).slice(-4)
  }else if(data.toString().length==3){
    return ('0' + data).slice(-4)
  }else{
    return data
  }
}

router.post('/newPatientTest', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    PatientTest.find().then(data=>{
      const newPatientTest= new PatientTest({
        patient:req.body.patient,
        guardian:req.body.guardian,
        referringPerson:req.body.referringPerson,
        referringCenter:req.body.referringCenter,
        tests:req.body.tests,
        billId:getBillId(data.length+1),
        totalAmountToPay:req.body.totalAmountToPay,
        paidAmount:req.body.paidAmount,
        remainingBalance:req.body.remainingBalance,
        paymentMode:req.body.paymentMode,
        totalDiscount:req.body.totalDiscount,
        additionalBill:req.body.additionalBill
      })
      newPatientTest.save()
      .then(patientTest=> res.json(patientTest))
      .catch(err=>{
        res.json(err)
      });
    }).catch(err=>{
      res.json(err)
    })
  }  
})

router.post('/:id/sign', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    PatientTest.updateOne({_id:req.params.id}, {$set:{isComplete:true}})
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})

router.get('/allPatientTest', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    PatientTest.find().populate('patient').populate('guardian').populate('referringPerson').populate('referringCenter').populate('tests.test')
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})

router.get('/allIncompletePatientTest', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    PatientTest.find({isComplete:false})
     .then(data=> res.json(data))
     .catch(err=> res.json(err))
  }
})



router.get('/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  let id = req.params.id;
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    PatientTest.findById(id).populate('tests.test').populate('patient').populate('guardian').populate('referringPerson').populate('referringCenter')
    .then(data=> res.json(data))
    .catch(err=> res.json(err));
  }
});

router.post('/update/:id', passport.authenticate('jwt', {session:false}), function(req, res) {
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    PatientTest.findByIdAndUpdate({_id:req.params.id}, req.body).then(data=>{
      res.status(200).json(data)
    }).catch((err)=>{
      res.json(err)
    })
  }  
});

router.post('/:id/addReportResult', (req, res)=>{
  PatientTest.updateOne({_id:req.params.id}, { $set:{tests:req.body.tests}}).then(data=>{
    res.json(data)
  }).catch((err)=>{
    res.json(err)
  })
})

router.delete('/delete/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
  if(req.user.user_role==="admin" || req.user.user_role==="branchAdmin" || req.user.user_role==="staff"){
    PatientTest.findByIdAndRemove({_id:req.params.id})
      .then(data=> res.json(data))
      .catch(err=> console.log(err));
  }    
})


module.exports=router;