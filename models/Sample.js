const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const sampleSchema=new Schema({
	type:{
		type:String,
		require:true
    },
    container:{
        type:String
    },
    containerCapColor:{
        type:String
    },
    storageTemperature:{
        type:String
    },
    storageDuration:{
        type:String
    },
    importantInfo:{
        type:String
    },
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=Sample=mongoose.model('samples', sampleSchema);