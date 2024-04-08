const express=require("express");
const mongoose=require("mongoose");
const app= express();
mongoose.connect("mongodb://localhost:27017/lab",{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  family:4
})
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log(Error);
})
const logindesgin=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    }
});
const collection = new mongoose.model("siginin",logindesgin);
module.exports=collection;
