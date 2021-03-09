const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const inventorySchema=new Schema({
	name:{
		type:String,
		require:true
    },
    department:{
        type:Schema.Types.ObjectId,
        ref:'departments'
    },
    type:{
        type:String
    },
    unit:{
        type:Number
    },
    purchaseCode:{
        type:String
    },
    materialSafetyCode:{
        type:String
    },
    quantity:{
        type:Number
    },
    alertLevel:{
        type:String
    },
    tax:{
        type:String
    },
    purchase:{
        type:Boolean
    },
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=Inventory=mongoose.model('inventories', inventorySchema);