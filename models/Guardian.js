const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const guardianSchema=new Schema({
	title:{
		type:String,
		require:true
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    mobileNumber:{
        type:String
    },
    email:{
        type:String
    },
    relationshipToPatient:{
        type:String
    },
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=Guardian=mongoose.model('guardians', guardianSchema);