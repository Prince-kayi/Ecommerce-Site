const mongoose=require("mongoose")
const {Schema}=mongoose;

const SignInSChema= new Schema({
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},
{
  timestamps:true
}
)
module.exports= mongoose.model("signin",SignInSChema)