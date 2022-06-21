const mongoose =require("mongoose");

const doubtSchema= new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    ans :{
        type: String,
        required:true
    },
    number :{
        type:Number,
        
        
    },
    doubt :{
        type:String,
        required:true,

    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    password :{
        type:String,
        required:true,
        unique:true
    }
})
const Register = new mongoose.model("Registers",doubtSchema);
module.exports= Register;