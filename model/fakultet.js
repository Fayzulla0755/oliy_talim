const mongoose=require("mongoose")
const schema=mongoose.Schema

const fakultet=new schema({
    ID:{
        type:Number,
        unique:true
    },
    fakultet_nomi:{
        type:String 
    },
    talabalar_soni:{
        type:Number
        
    },
    // malumotlarni qo'shish
    malumot:{
        type:String
    },
    unversitsed_id:schema.Types.ObjectId
})
module.exports=mongoose.model("fakultetlar",fakultet)