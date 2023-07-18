import React, { useEffect, useState } from 'react'
import {FaTrash} from "react-icons/fa"

const AdminHome = ({userDatas}) => {
   const[details,setDetails]=useState([])
    useEffect(()=>{
       deleteAll();
        },[]);


        const deleteAll=()=>{
            fetch("http://localhost:1789/kai/getAllUser",{
                method: "GET",
                
        })
        .then((res)=>res.json())
             .then((data)=>{
              console.log(data,"Userdata")
              setDetails(data.data)
             });
        }
    const logOut=()=>{
        window.localStorage.clear();
        window.location.href="/login"
      }
      const deleteUser=(id,firstName)=>{
        fetch("http://localhost:1789/kai/deleteUser",{
            method: "POST",
            crossDomain: true,
            headers:{
              "Content-Type": "application/json",
              Accept:"application/json",
              "Access-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
              userid:id,
            }),
      })
      .then((res)=>res.json())
      .then((data)=>{
    alert(data.data)
    deleteAll();
      });
    }
  return (
    <div>

<div className="loginn">
      <div className="login-wrap">
     <div className="adi">
        <h2>Welcome Admin User</h2>
        <table style={{width:500}}>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>UserType</th>
                <th>Delete</th>

            </tr>
            {details.map(i=>{
                return(
                    <tr>
                        <td>{i.firstName}</td>
                        <td>{i.email}</td>
                        <td>{i.UserType}</td>
                        <td><FaTrash onClick={()=>deleteUser(i._id,i.firstName)}/></td>
                    </tr>
                )
            })}
        </table>
        <br/>
        <br/>
     <button onClick={logOut} className="register-now">Log Out</button>
     </div>
    </div>
    </div>
    </div>
  )
}

export default AdminHome