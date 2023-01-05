const mongoose=require("mongoose")
const {Schema}=mongoose;

const SignInSChema= new Schema({
    emailAddress:{
        type:String,
        required:true
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