const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const referralCenterSchema=new Schema({
	nameofReferralCenter:{
		type:String,
		require:true
    },
    categoryofReferralCenter:{
        type:String
    },
    primarySpecilityofCenter:{
        type:String
    },
    phone1:{
        type:String
    },
    phone2:{
        type:String
    },
    centerEmail:{
        type:String
    },
    user_role:{
        type:String,
        default: 'member'
    },
    nameofDirector:{
        type:String
    },
    phoneNoofDirector:{
        type:String
    },
    emailAddressofDirector:{
        type:String
    },
    primaryContactPerson:{
        type:String
    },
    primaryContactPersonEmail:{
        type:String
    },
    primaryContactPersonPhone:{
        type:String
    },
    centerAddress:{
        type:String
    },
    centerLocation:{
        type:String
    },
    discountofCenterPatient:{
        type:String
    },
    password:{
        type:String
    },
    creditLimit:{
        type:String
    },
    cutofReferringCenter:{
        type:String
    },
    referringCenterOpeningBalance:{
        type:String
    },
    referringCenterRevenueTarget:{
        type:String
    },
    referringCenterMarketer:{
        type:String
    },
	date:{
		type:Date,
		default:Date.now
	}
})

module.exports=ReferralCenter=mongoose.model('referralCenter', referralCenterSchema);