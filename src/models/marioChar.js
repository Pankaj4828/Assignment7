const { Number } = require('mongoose');
const mongoose = require('mongoose');

//  Your code goes here
const Schema = mongoose.Schema;
const mariochar = new Schema({
    name:{type:String,unique:true},
    weight:Number
})
const marioModel=mongoose.model("marioModel", mariochar)

module.exports = marioModel;