import React, { useState } from "react";
const Login = () => {
  return(
     <div className="loginn">
       <div className="login-wrap">
      <form className="login-form">
                     <h1 className="inn"> Login</h1>
                    <label>Email address
                      <div className="ad">
                     <input type="text" name="firstName" />
                     </div>
                    </label>
                    <label> Password </label>
                       <div className="ad">
                    <input type="text" name="firstName"/>
                     </div>    
                    <div className="logi-bottom">
                   <button className="loggin"> Login</button>
                    <p>New to BuyAlot ? <a href="/create-ac"> Create account</a></p>
               </div>
                   

      </form>
       
       </div>
     </div>
  )
   ;
}
export default Login