const mongodb=require("mongoose")
const fakultet = require("./fakultet")
const schema=mongodb.Schema


const fan_oqtuvchisi= new schema({
    name:{
        type:String,
        required:true
    },
    fulname:{
        type:String,
        required:true

    },
    fan_nomi:{
        type:String,
        required:true
    },
    talabalari_soni:{
        type:Number,
        required:true
    },
    fakultet_id:schema.Types.ObjectId
})


module.exports=mongodb.model("O'qtuvchi ", fan_oqtuvchisi)