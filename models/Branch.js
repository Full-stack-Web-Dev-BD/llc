const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const branchSchema=new Schema({
	name:{
		type:String,
		require:true
	},
	location:{
		type:String,
		require:true
	},
	address:{
		type:String,
		require:true
	},
	
	country:{
		type:String,
		require:true
    },
	city:{
		type:String,
		require:true
    },
    state:{
		type:String
	},
	phone1:{
		type:String
	},
	phone2:{
		type:String
	},
	email:{
		type:String
	},
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=Branch=mongoose.model('branchs', branchSchema);