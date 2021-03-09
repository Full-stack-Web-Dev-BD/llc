const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const patientSchema=new Schema({
	patientNo:{
		type:String,
		required:true
	},
	title:{
		type:String,
		require:true
	},
	firstName:{
		type:String,
		require:true
	},
	lastName:{
		type:String,
		require:true
	},
	otherName:{
		type:String,
		require:true
	},
    gender:{
		type:String
	},
	dateOfBirth:{
		type:String,
		required:true
	},
	age:{
		type:Number
	},
	mobileNumber1:{
		type:String
	},
	mobileNumber2:{
		type:String
	},
	email:{
		type:String
	},
	email1:{
		type:String
	},
	address:{
		type:String
	},
	locationofAddress:{
		type:String
	},
	nationality:{
		type:String
	},
	stateofOrigin:{
		type:String
	},
	religion:{
		type:String
	},
	primaryInsurer:{
		type:String
	},
	primaryInsurancePolicy:{
		type:String
	},
	primaryInsuranceNumber:{
		type:String
	},
	hearAboutUs:{
		type:String
	},
	creditLimit:{
		type:String
	},
	discountForPatient:{
		type:String
	},
	openingBalance:{
		type:String
	},
	patientsMarketer:{
		type:String
	},
	user_role:{
		type:String,
		default: 'member'
	},
	password:{
		type:String
	},
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=Patient=mongoose.model('patients', patientSchema);