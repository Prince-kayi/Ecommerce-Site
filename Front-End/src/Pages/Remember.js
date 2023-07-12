import React, { useState } from 'react'

function Remember() {
   const [email,setEmail]=useState("")
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
            <button className="loggin"> Submit</button>
            <p className='fogt'><a href="/register"> Sign Up</a></p>
         </div>
      </form>
   </div>
</div>
  )
}

export default Remember