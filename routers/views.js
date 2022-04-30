const express=require("express")
const router=express.Router()
const unvested=require("../model/unversted")


  router.get("/",(req,res)=>{
      res.render("index")
      res.json(unversted.find({}))
  })




module.exports=router