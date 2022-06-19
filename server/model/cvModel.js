const  mongoose=require("mongoose");

const cvSchema=new mongoose.Schema({
    file:{type:String,required:true,trim:true},
    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true},
    phone:{type:Number,required:true,trim:true},
    ug:{type:String,required:true,trim:true},
    pg:{type:String,required:true,trim:true}

})

const cvModel=mongoose.model('cv',cvSchema)

module.exports=cvModel;