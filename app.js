const express = require("express");
const connectDB=require("./connectDB")
const app=express()
app.use(express.json())
connectDB()
const port=5000
app.use("/api/person",require("./routes/personroute.js"))
app.listen(port,(err)=>err?console.log(err):console.log("serveur is running on port 5000"))
 

