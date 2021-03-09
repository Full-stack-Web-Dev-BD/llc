const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const citySchema=new Schema({
	name:{
		type:String,
		require:true
	},
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=City=mongoose.model('cities', citySchema);