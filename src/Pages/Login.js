import React, { useState } from "react";
const Login = () => {
   const [Loginform,setLForm]=useState({
      emailAddress:" ",
      password:" ",
     

  })

  const Changer=(e)=>{
     const Newdata={...Loginform}
     Newdata[e.target.name]=e.target.value
     setLForm(Newdata)

  }

  const Submit=(e)=>{
     e.preventDefault();
  }

  const Show=()=>{
     console.log("LoginForm",Loginform)
  }
  return(
     <div className="loginn">
       <div className="login-wrap">
      <form className="login-form" onSubmit={Submit}>
                     <h1 className="inn"> Login</h1>
                    <label>Email address
                      <div className="ad">
                     <input type="text" name="emailAddress" onChange={Changer} value={Loginform.emailAddress} required />
                     </div>
                    </label>
                    <label> Password </label>
                       <div className="ad">
                    <input type="text" name="password" onChange={Changer} value={Loginform.password} required/>
                     </div>    
                    <div className="logi-bottom">
                   <button className="loggin" onClick={Show}> Login</button>
                    <p>New to BuyAlot ? <a href="/register"> Create account</a></p>
               </div>
                   

      </form>
       
       </div>
     </div>
  )
   ;
}
export default Login