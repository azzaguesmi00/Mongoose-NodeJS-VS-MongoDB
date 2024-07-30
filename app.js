
const express = require("express");
const connectDB=require("./connectDB")
const app=express()
connectDB()
const port=5000

app.listen(port,(err)=>err?console.log(err):console.log("serveur is running on port 5000"))
 

