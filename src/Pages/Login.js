import React, { useState } from "react";
const Login = () => {
   const [Loginform, setLForm] = useState({
      emailAddress: " ",
      password: " "
   })
   const [error,setErrors]=useState({
      emailAddress: " ",
      password: " "
   })
   const[successMsg,setMsg]=useState("");
   const Changer = (e) => {
      const Newdata = { ...Loginform }
      Newdata[e.target.name] = e.target.value
      setLForm(Newdata)
   }
   const Submit = (e) => {
      e.preventDefault();
      if(Loginform.emailAddress==" " || Loginform.password==""){
         setErrors((LoginForm)=>({
         ...LoginForm,
         emailAddress:"Please enter your email address",
         password:"Please enter  your password"
         }));
         return; 
        }
        if(!Loginform.emailAddress.includes("@")){
         setErrors((LoginForm)=>({
         ...LoginForm,
         emailAddress:"Invalid email"
         }));
         return; 
        }
        else{
         setErrors((LoginForm)=>({
            ...LoginForm,
            emailAddress:" "
            }));   
        if(!Loginform.password.includes("@")){
         setErrors((LoginForm)=>({
         ...LoginForm,
         password:"password does not match"
         }));  
        }
        else{
         setErrors((LoginForm)=>({
            ...LoginForm,
            password:" "
            }));
 return setMsg("you have successfully logged in"); 
         }
      }
   }
   const Show = () => {
      console.log("LoginForm", Loginform)
   }
   return (
      <div className="loginn">
         <div className="login-wrap">
            <form className="login-form" onSubmit={Submit}>
            {successMsg &&<div className='finally'>{successMsg}</div>}
               <h1 className="inn"> Login</h1>
               <label>Email address </label>
                  <div className="ad">
                     <input type="text" name="emailAddress" onChange={Changer} value={Loginform.emailAddress} />
                {!!error.emailAddress&&<div className="error-msg">{error.emailAddress}</div>}
                  </div>
               <label> Password </label>
              
             <a href="/forgotPass" className="fogot">Forgot password?</a>
              <div className="ad">  
                  <input type="password" name="password" onChange={Changer} value={Loginform.password} />
                  {!!error.password &&<div className="error-msg">{error.password}</div>}
               </div>
               <div className="logi-bottom">
                  <button className="loggin" onClick={Show}> Login</button>
                  <p>New to BuyAlot ? <a href="/register"> Create account</a></p>
               </div>
            </form>
         </div>
      </div>
   ) ;
}
export default Login