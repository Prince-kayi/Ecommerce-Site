import React, { useState } from 'react'
import AccList from "./AccList"
import {Link } from 'react-router-dom'

 const Acc=()=> {
     const[click, setClick]=useState(false)
    const handleClick =()=>setClick(!click)
  return ( 
    <div>
      <ul onClick={handleClick} className={click ? "menu-active":"Menu"} >
       {AccList.map((item,index)=>{
           return(
            <li key={index}>
            <Link to={item.path} className={item.Cname} onClick={() => setClick(false)}>
                {item.title}
            </Link>
        </li>
    )
       })}     
    </ul> 
    </div>
   
  );
 
}
export default Acc