const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const userSchema=new Schema({
	name:{
		type:String,
		require:true
	},
	email:{
		type:String,
		require:true
	},
	user_role:{
		type:String,
		require:true
	},
	photo:{
		type:String
	},
	phone:{
		type:String
	},
	password:{
		type:String,
		require:true
	},
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=User=mongoose.model('users', userSchema);