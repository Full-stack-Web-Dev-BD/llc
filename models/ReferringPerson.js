const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const referringPersonSchema=new Schema({
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
    speciality:{
        type:String
    },
    dateofBirth:{
        type:String
    },
    primaryPlaceofPractice:{
        type:String
    },
    creditLimit:{
        type:String
    },
    discountForReferringPerson:{
        type:String
    },
    cutForReferringPerson:{
        type:String
    },
    openingBalance:{
        type:String
    },
    referringPersonMarketer:{
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

module.exports=ReferringPerson=mongoose.model('referringPersons', referringPersonSchema);