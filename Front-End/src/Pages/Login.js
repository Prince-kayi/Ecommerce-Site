import React, { useState } from "react";
const Login = () => {
   const [Loginform, setLForm] = useState({
      email: " ",
      password: " "
   })
   const Changer = (e) => {
      const Newdata = { ...Loginform }
      Newdata[e.target.name] = e.target.value
      setLForm(Newdata)
   }
   const Show = (e) => {
      e.preventDefault();
      const{email,password}=Loginform
      console.log(email,password)
      fetch("http://localhost:1789/kai/signIn",{
        method: "POST",
        crossDomain: true,
        headers:{
          "Content-Type": "application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body: JSON.stringify({
         email,
         password
        
        }),
  })
  .then((res)=>res.json())
  .then((data)=>{
   console.log(data,"Loginform")
   if(data.status==="ok"){
      alert("login sucessfully")
      window.localStorage.setItem("token",data.data);
      window.localStorage.setItem("loggedIn",true);
      window.location.href="./slider"
   }
   
  })
   }
   return (
      <div className="loginn">
         <div className="login-wrap">
            <form className="login-form" onSubmit={Show}>
               <h1 className="inn"> Login</h1>
               <label>Email address: </label>
                  <div className="ad">
                     <input type="text" name="email" onChange={Changer} value={Loginform.email} />
                  </div> 
               <label> Password: </label>
             <a href="/forgotPass" className="fogot">Forgot Password?</a>
              <div className="ad">  
                  <input type="password" name="password" onChange={Changer} value={Loginform.password} />
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