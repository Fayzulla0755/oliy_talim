const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser=require("body-parser")
const path=require("path")
const port=(process.env.PORT || '3000')
const rAdd=require("./routers/add")
const rViews=require("./routers/views")


mongoose.connect("mongodb://localhost:27017/oliy_talim")
const db=mongoose.connection
db.on("open",()=>{
    console.log("mongodb runing");
})
db.on("error",(err)=>{
    console.log(err);
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.set("view engine","pug")
app.use(express.static(path.join(__dirname,"public")))

app.use(rAdd)
app.use(rViews)

app.listen(port,()=>{
    console.log("server ruvning");
})