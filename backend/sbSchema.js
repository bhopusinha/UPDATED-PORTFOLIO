const mongoose = require('mongoose');

const schema=new mongoose.Schema({
    name:{type:String,required:true},
    message:{type:String, required:true}
})


module.exports=mongoose.model('Message',schema);