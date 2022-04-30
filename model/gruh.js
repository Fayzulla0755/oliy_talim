const mongoose=require("mongoose")
const schema=mongoose.Schema


const gruh= new schema({
    tartib_r:{
        type:Number,
        required: true,
        unique:true
    },
    talaba_IFSh:{
        type:String,
        required:true
    },
    // Fakultetning id raqamlarini bir-biriga bog'landai
    fakultet_id:schema.Types.ObjectId,
    retingi:{
        type:Number,
        required:true
    },
    

})