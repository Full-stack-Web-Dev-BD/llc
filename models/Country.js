const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const countrySchema=new Schema({
	name:{
		type:String,
		require:true
    },
    states:[{
        type:Schema.Types.ObjectId, 
        ref:'states'
    }],
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=Country=mongoose.model('countries', countrySchema);