const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const expenseSchema=new Schema({
	expenseName:{
		type:String,
		require:true
	},
	expenseCategory:{
		type:String
	},
	expenseCost:{
		type:Number
	},
	expenseQuantity:{
		type:Number
	},
	expenseUnit:{
		type:Number
	},
	purposeofExpense:{
		type:String
	},
	requestDate:{
		type:String
	},
	requestPerson:{
		type:String
	},
	approvedBy:{
		type:String
	},
	approvedDate:{
		type:String
	},
	proofofExpense:{
		type:String
	},
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=Expense=mongoose.model('expenses', expenseSchema);