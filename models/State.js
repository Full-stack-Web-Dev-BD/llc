const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const stateSchema=new Schema({
	name:{
		type:String,
		require:true
    },
    cities:[{
        type:Schema.Types.ObjectId,
        ref:'cities'
    }],
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=State=mongoose.model('states', stateSchema);