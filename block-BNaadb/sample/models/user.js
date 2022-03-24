var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
    name:{type:String,required:true},
    email:String,
    age:Number,
    profession:String,
    address:String,
})

module.exports=mongoose.model('User',userSchema);