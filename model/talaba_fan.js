const mongodb=require("mongoose")
const schema=mongodb.Schema

const talaba_fan =new schema({
   fan_nomi:{
       type:String,
       required:true
   },
   fan_baxosi:{
       type:Number,

   },
   NBlarSoni:{
       type:Number,
       default: 0
   },
   // Talabalarni id raqamlarini bir-biriga bog'landai
   talaba_id:schema.Types.ObjectId
})

module.exports=mongodb.model("talaba_fan", talaba_fan)