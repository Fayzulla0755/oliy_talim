const express=require("express")
const router=express.Router()
const unversted=require("../model/unversted")
const fakultet=require("../model/fakultet")
const gruh=require("../model/gruh")
const fan_oqtuvchisi=require("../model/fan_oqtuvchilari")
const talaba_fan=require("../model/talaba_fan")
const talaba_sh=require("../model/talaba_sh")





router.post("/create/unversted",(req,res)=>{
    const {t_raqam,unversted_nomi,manzil,viloyat,email} =req.body
    const db=new unversted({
        t_raqam: t_raqam,
        unversted_nomi: unversted_nomi,
        manzil:manzil,
        viloyat:viloyat,
        email:email

    })
    db.save().then(data=>{
        res.json(data)

    }).catch(err=>{
        console.log(err);
    })
})
router.post("/create/fakultet",(req,res)=>{
    const {ID,fakultet_nomi,talabalar_soni,malumot,unversted_id}=req.body
    const db= new fakultet({
        ID:ID,
        fakultet_nomi:fakultet_nomi,
        talabalar_soni:talabalar_soni,
        malumot:malumot,
        unversted_id:unversted_id
    })
    db.save().then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log(err);
    })
})

router.post("/create/gruh",(req,res)=>{
    const {tartib_r,talaba_IFSh,fakultet_id,retingi}=req.body
    const db= new gruh({
        tartib_r:tartib_r,
        talaba_IFSh: talaba_IFSh,
        fakultet_id:fakultet_id,
        retingi:retingi
    })
    db.save().then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log(err)
    })
})
router.post("/create/talaba_sh",(req,res)=>{
    const {name,surname,sharif,age,gruh_id,t_shahri, malumot}=req.body
    const db= new talaba_sh({
        name: name,
        surname: surname,
        sharif:sharif,
        age:age,
        gruh_id:gruh_id,
        t_shahri:t_shahri,
        malumot:malumot

    })
    db.save().then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log(err);
    })
})

router.post("/create/talaba_fan",(req,res)=>{
    const {fan_nomi, fan_baxosi,NBlarSoni,talaba_id}=req.body
    const db= new talaba_fan({
        fan_nomi:fan_nomi,
        fan_baxosi:fan_baxosi,
        NBlarSoni:NBlarSoni,
        talaba_id:talaba_id

    })
    db.save().then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log(err);
    })
})

router.post("/create/fan_oqtuvchisi",(req,res)=>{
    const {name,fulname,fan_nomi,talabalar_soni,fakultet_id}=req.body
    const db= new fan_oqtuvchisi({
        name: name,
        fulname:fulname,
        fan_nomi:fan_nomi,
        talabalar_soni:talabalar_soni,
        fakultet_id:fakultet_id

    })
    db.save().then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log(err);
    })
})
module.exports=router