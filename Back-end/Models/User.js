import mongoose from 'mongoose';
const {Schema}=mongoose

const UserSchema= new Schema({
    firstName:{type:String, min:2, max:50,required:true},
    lastName:{type:String, min:2, max:50,required:true},
    email:{type:String, min:5, max:50,required:true,unique:true},
    retypeEmail: {type:String, min:5, max:50,required:true,unique:true},
    password: {type:String,required:true},
    retypePassword: {type:String,required:true},
    Mnumber:{type:Number, min:10,required:true},

})

const User=mongoose.model("users",UserSchema);
export default User
