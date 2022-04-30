const mongodb=require("mongoose")
const schema=mongodb.Schema

const unversted = new schema({
    t_raqam:{
        type:Number,
        required:true,
        unique:true
    },
    unversted_nomi:{
        type:String,
        required:true
    },
    manzil:{
        type:String,
        default:"Talabalar soni berilmagan"
    },
    viloyat:{
        type:String
    },
    email:{
        type:String
    }
}) 
 
module.exports=mongodb.model("Unversted", unversted)

// http://www.erasmusplus.uz/uz/Higher-education/HEI/index.htm