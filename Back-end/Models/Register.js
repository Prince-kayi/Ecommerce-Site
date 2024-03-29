const mongoose=require("mongoose")
const {Schema}=mongoose;

const SignUpSchema= new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    retypeEmail:{
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },
    retypePassword:{
        type:String,
         required:true
    },
    Mnumber:{
        type:String,
        required:true
    },
    choice: {
        type:String,
        required:true
    },
    UserType:{
        type:String,
    },
   
},
{
    timestamps:true
},

)

module.exports= mongoose.model("signup",SignUpSchema)