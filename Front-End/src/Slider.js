import { useState } from "react"
import React from 'react'

const Slider=()=> {
  const[userDatas,setUserdatas]=useState({
     userDatas:""
  })
  fetch("http://localhost:1789/kai/userData",{
        method: "POST",
        crossDomain: true,
        headers:{
          "Content-Type": "application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body: JSON.stringify({
          token: window.localStorage.getItem("token")
        }),
  })
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data,"userData");
    setUserdatas({userDatas:data.data});
    if(data.data==="token expired"){
    
      window.localStorage.clear();
       window.location.href="/login"

    }
  });

     const logOut=()=>{
       window.localStorage.clear();
       window.location.href="/login"
     }
  return (
    <div className="unity">
     Name<h1>{userDatas.userDatas.firstName}</h1>
     Email<h1>{userDatas.userDatas.email}</h1>
     <button onClick={logOut} className="register-now">Log Out</button>
    </div>
  )
}
export default Slider