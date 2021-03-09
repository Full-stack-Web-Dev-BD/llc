const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const productSchema=new Schema({
	name:{
		type:String,
		require:true
    },
    department:{
        type:Schema.Types.ObjectId,
        ref:'departments'
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
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
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=Product=mongoose.model('products', productSchema);