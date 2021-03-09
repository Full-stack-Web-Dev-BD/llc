const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const reportTypeSchema=new Schema({
	name:{
		type:String,
		require:true
    },
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=ReportType=mongoose.model('reportType', reportTypeSchema);