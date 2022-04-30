const mongodb= require("mongoose")


const schema=mongodb.Schema

const talaba=new schema({
    name:{
        type:String,
        required:true,

    },
    surname:{
        type:String,
        required:true
    },
    sharif:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    // Talabalarni id raqamlarini bir-biriga bog'landai
    gruh_id:schema.Types.ObjectId,
    t_shahri:{
        type:String,
        default:"yashash manzili kiritilmagan"
    },
    malumot:{
        type:String,
        minlength:20
    }

})

module.exports=mongodb.model("talaba_sh", talaba)