const express=require("express")
const router=express.Router()
const fakulted=require("../model/fakultet")
const unversted = require("../model/unversted")
const talaba_sh=require("../model/talaba_sh")
const talaba_fan=require("../model/talaba_fan")
const gruh=require("../model/gruh")
const fan_oqtuvchilari=require("../model/fan_oqtuvchilari")


  router.get("/",(req,res)=>{
      res.render("index")
      res.json(unversted.find((err)=>{
        console.log(err);
      }))
  });
  router.get("/unversted",(req,res)=>{
    unversted.find({}).then(data=>res.json(data)).catch(err=>console.log(err))

  })
  router.get("/fakulted",(req,res)=>{
    fakulted.find({}).then(data=>res.json(data)).catch(err=>console.log(err))

  })
  router.get("/talaba_sh",(req,res)=>{
    talaba_sh.find({}).then(data=>res.json(data)).catch(err=>console.log(err))

  })
  router.get("/talaba_fan",(req,res)=>{
    talaba_fan.find({}).then(data=>res.json(data)).catch(err=>console.log(err))

  })
  router.get("/fan_oqtuvchilari",(req,res)=>{
    fan_oqtuvchilari.find({}).then(data=>res.json(data)).catch(err=>console.log(err))

  })
  router.get("/gruh",(req,res)=>{
    gruh.find({}).then(data=>res.json(data)).catch(err=>console.log(err))

  })

  router.get("/view/unversted",(req,res)=>{
    const promise=unversted.aggregate([
      {
        $lookup:{
            from: "fakulted",
            localField: "_id",
            foreignField: "unversitsed_id",
            as:"fakultedlar"
        }
    },
    {
        $unwind:{
            path:"$fakultedlar"
        }
    },
    {

     $group:{
         _id:{
             _id: "$_id",
             t_raqam:"$t_raqam",
             unversted_nomi:"$unversted_nomi",
             manzil: "$manzil",
             viloyat:"$viloyat",
             email: "$email"
         },
         filimlar:{
             $push:"$fakultedlar"
         }
     }
    },
    ])
    promise.then(data=>{res.json(data)})
    promise.catch(err=>{
      console.log(err)
    })
  })

// Talabalarsoni bo'yicha maximali
router.get("/fakulted/max",(req,res)=>{
  const promise=fakulted.find({}).sort({talabalar_soni: -1}).limit(1)
  promise.then(data=>{
    res.json(data)
  }).catch(err=>{
    console.log(err);
  })

})
// Talabalar soni bo'yicha minimali
router.get("/fakulted/min",(req,res)=>{
  const promise=fakulted.find({}).sort({talabalar_soni: 1}).limit(1)
  promise.then(data=>{
    res.json(data)
  }).catch(err=>{
    console.log(err);
  })
})
// Talabalar sonini summasi
router.get("/fakulted/summa",(req,res)=>{
  const promise=fakulted.aggregate([
    {
      $group:
      {
        _id: { },
        totalAmount: { $sum: "$talabalar_soni" },
        count: { $sum: 1 }
      }
    }
  ])
  promise.then(data=>{
    res.send(data)
  }).catch(err=>{
    console.log(err);
  })

})
  // Talabalar sonini oraliqda chiqarish
  router.get("/fakulted/:dan/:gacha",(req,res)=>{
    const{dan,gacha}=req.params
    const promise=fakulted.find({talabalar_soni:{ $gte: (dan), $lte: (gacha)}})
    promise.then(data=>{
      res.json(data)
    }).catch(err=>{
      console.log(err);
    })
  })
  // Talabalarning "dan " kamni ko'rsatadi
  router.get("/fakulted/:dan",(req,res)=>{
    const dan =req.params
    fakulted.find({talabalar_soni:{$gte:0}, $lte:(dan)}).then(data=>res.json(data)).catch(err=>console.log(err))
  })


module.exports=router