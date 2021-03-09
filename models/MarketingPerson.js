const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const marketingPersonSchema=new Schema({
	name:{
		type:String,
		require:true
    },
    phone:{
		type:String,
		require:true
    },
    email:{
		type:String,
		require:true
    },
    address:{
		type:String,
		require:true
    },
    dateofBirth:{
		type:String,
		require:true
    },
    age:{
		type:String,
		require:true
    },
    revenueTarget:{
		type:String,
		require:true
    },
    parcentage:{
		type:String,
		require:true
	},
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=MarketingPerson=mongoose.model('marketingPersons', marketingPersonSchema);