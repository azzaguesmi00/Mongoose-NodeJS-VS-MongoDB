require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const person = require('./models/person');
 
mongoose.connect(process.env.MONGO_URI , {
    useNewUrlParser: true
    

})