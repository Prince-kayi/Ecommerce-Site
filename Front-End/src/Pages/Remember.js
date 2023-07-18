import React, { useState } from 'react'

function Remember() {
   const [Email,setEmail]=useState({email:""})

   const Show = (e) => {
      e.preventDefault();
      const {email}=Email
      console.log(Email)
      fetch("http://localhost:1789/kai/forgotPass",{
        method: "POST",
        crossDomain: true,
        headers:{
          "Content-Type": "application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body: JSON.stringify({
         email,
        
        }),
  })
  .then((res)=>res.json())
  .then((data)=>{
   console.log(data,"Email")
   alert(data.status) 
  })
   }
  return (
   <div className="loginn">
   <div className="login-wrap">
      <form className="login-form">
         <h1 className="inn"> Forgot Password</h1>
         <label>Email address: </label>
            <div className="ad">
               <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} />
            </div> 
         <div className="logi-bottom">
            <button className="loggin" onClick={Show}> Submit</button>
            <p className='fogt'><a href="/register"> Sign Up</a></p>
         </div>
      </form>
   </div>
</div>
  )
}

export default Remember