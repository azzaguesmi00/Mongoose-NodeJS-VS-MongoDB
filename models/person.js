const mongoose = require('mongoose');

const schemaPerson = new mongoose.Schema({
    name : {type : String},
    age: Number,
    favoritefood:[String],

});
const Person  = mongoose.model('Person', schemaPerson);
module.exports = Person;
