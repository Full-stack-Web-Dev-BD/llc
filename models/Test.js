const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const testSchema=new Schema({
	testCode:{
		type:String,
		require:true
	},
	testName:{
		type:String,
		require:true
	},
	loincCode:{
		type:String,
		require:true
	},
	testPrice:{
		type:String,
		require:true
	},
	revenueTarget:{
		type:String,
		require:true
	},
	positionPriority:{
		type:String,
		require:true
	},
	department:{
		type:String,
		require:true
	},
	category:{
		type:String,
		require:true
	},
	sampleType:{
		type:Schema.Types.ObjectId,
		ref:'samples'
	},
	reportType:{
		type:String,
		require:true
	},
	testValues:{
		type:Array
	},
	date:{
		type:Date,
		default:Date.now
	}
})
module.exports=Test=mongoose.model('tests', testSchema);