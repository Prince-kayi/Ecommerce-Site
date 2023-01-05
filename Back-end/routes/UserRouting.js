const express =require("express")
const router= express.Router();
const Login= require("../Models/Login")
const Register=require("../Models/Register")

router.post("/signin",(req,res)=>{
      const sign_in= new Login({
        emailAddress:req.body.emailAddress,
        password:req.body.password 
      })
      sign_in.save()
      .then(data=>{
         res.json(data)
      })
      .catch(error=>{
        res.json(error)
      })
})
router.post("/signup",(req,res)=>{
  const sign_up= new Register({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    retypeEmail:req.body.retypeEmail,
    password:req.body.password,
    retypePassword:req.body.retypePassword,
    Mnumber:req.body.Mnumber,
    choice:req.body.choice,
  })
  sign_up.save()
  .then(data=>{
    res.json(data)
  })
  .catch(error=>{
    res.json(error)
  })
})
module.exports=router;
