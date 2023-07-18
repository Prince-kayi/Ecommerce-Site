const express =require("express")
const router= express.Router();
const Login= require("../Models/Login")
const Register=require("../Models/Register")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")


JWT_SECRET="sdgvfadsgjvfwret@@$%&()(GFFVGUGTG(*&$%Y&YU()(*&GUJHTH"

router.post("/signIn",async(req,res)=>{
    const {email,password}=req.body
      const user= await Register.findOne({email});
      if (!user){
          return res.json({error:"User Not Found"})
      }
      if(await bcrypt.compare(password, user.password)){ 
          const token =jwt.sign({email:user.email}, JWT_SECRET,{
            expiresIn:30,
          });
          if(res.status(201)){
              return res.json({status:"ok", data:token})
          }
          else
          {
              return res.json({error:"error"})
          }
      }
res.json({status:"error", error:"Invalid Password"})
})
router.post("/signUp",async(req,res)=>{

   const {firstName,lastName,password,Mnumber,email,choice,retypePassword,retypeEmail,UserType}=req.body
  const encryptedPassword=await bcrypt.hash(password,10);
    try {
        const oldUser= await Register.findOne({email})
        if(oldUser){
            return res.json({error:"User Exists"})
        }
        await Register.create({
            firstName,
            lastName,
            email,
            password:encryptedPassword, 
            Mnumber,
            retypePassword,
            choice,
            retypeEmail,
            UserType
        });
       res.send({status:"ok"}) 
    } catch (error) {
        res.send({status:"error"})
    }
  })
router.post("/userData",async(req,res)=>{
  const {token}=req.body
  try {
    const user=jwt.verify(token,JWT_SECRET,(err,res)=>{
      if(err){
        return "token expired"
      }
      return res;

    });
    console.log(user);
    if(user=="token expired"){
      return  res.send({status:"error", data:"token expired"})
    }
    const userEmail=user.email;
    Register.findOne({email:userEmail})
    .then((data)=>{
      res.send({status:"ok", data:data})
    })
     .catch((error)=>{
       res.send({status:"error",data:error})
     });

    
  } catch (error) {
    
  }
})

router.post("/forgotPass",async(req,res)=>{
  const{email}=req.body;
  try {
    const oldUsers= await Register.findOne({email});
    if(!oldUsers){
      return res.json({status:"USER DOESN'T EXIT"});
    }
      const secret=JWT_SECRET +oldUsers.password;
      const token=jwt.sign({email:oldUsers.email, id:oldUsers._id},secret,{
        expiresIn:"5m",
      });
      const link=`http://localhost:1789/kai/forgotPass/${oldUsers._id}/${token}`
      console.log(link)
    
    
  } catch (error) {
    
  }

})

router.get("/forgotPass/id:/:token",async(req,res)=>{
     const{id,token}=req.params;
     console.log(req.params)
     res.send("done")
})

router.get("/getAllUser",async(req,res)=>{
  try {
    const allUser= await Register.find({})
    res.send({status:"ok", data:allUser})
  } catch (error) {
    console.log(error)
  }
})

router.post("/deleteUser",(req,res)=>{
  const {userid}=req.body
  try {
    Register.deleteOne({_id:userid},function(err,res){
      console.log(err)
    });
    res.send({status:"ok",data:"Deleted"})
    
  } catch (error) {
    console.log(error)
  }
})
module.exports=router;
