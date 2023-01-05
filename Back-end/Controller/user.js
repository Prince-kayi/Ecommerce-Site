import bcrypt from "bcryptjs"
import User from "../Models/User.js"
import  jwt  from "jsonwebtoken"

export const register= async(req,res)=>{
    try {
        const{firstName,lastName,email,password, Mnumber}=req.body
        if(password.length < 6) return res.status(400).
        json({success:false, message:"password must be 6 characters or more"})
        const emailLowerCase= email.toLowerCase()
        const existedUser= await User.findOne({email:emailLowerCase})
        if(existedUser)return res.status(400).json({sucess:false,message:"user already exists!"})
        const hashedPassword= await bcrypt.hash(password,12)
        if(Mnumber.length < 10) return res.status(400).
        json({success:false, message:"phone number must be 10 characters or more"})
        const user= await User.create({
            firstName,
            lastName,
            email:emailLowerCase,
            password:hashedPassword,
            Mnumber
        })

         const token=jwt.sign({firstName,lastName,Mnumber},process.env.JWT_SECRET,{expiresIn:"30mins"})
         res.status(201).json({success:true, result:{firstName,lastName,Mnumber,email:user.email,password:user.password,token}})
    }
     catch (error) 
     {
        console.log(error)
        res.status(500).json({success:false, message:"This is bullshit try again later you cunt"})
    }

}