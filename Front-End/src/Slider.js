import { useState } from "react"
import React from 'react'
import HomeUser from "./Pages/HomeUser"
import AdminHome from "./Pages/AdminHome"

const Slider=()=> {
  const[userDatas,setUserdatas]=useState({
     userDatas:""
  })

  const [admin,setAdmin]=useState(false)
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
    if(data.data.UserType==="Admin"){
      setAdmin(true)
    }
    setUserdatas({userDatas:data.data});
    if(data.data==="token expired"){
    
      window.localStorage.clear();
       window.location.href="/login"

    }
  });
  return (
    <div className="loginn">
    <div className="login-wrap">
      <div className="sli">
   { admin ? <AdminHome />: <HomeUser userDatas={userDatas}/>}
   </div>
   </div>
   </div>
  )
}
export default Slider