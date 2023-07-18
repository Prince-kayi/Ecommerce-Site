import React from 'react'

const HomeUser = ({userDatas}) => {
    const logOut=()=>{
        window.localStorage.clear();
        window.location.href="/login"
      }
  return (
    <div>

<div className="loginn">
      <div className="login-wrap">
        <div className="sli">
   <label className="abel">Name:</label>  
   <div className="adi">
     <h1>{userDatas.userDatas.firstName}</h1>
   </div>
     <label className="abel">Email:</label>
     <div className="adi">
     <h1>{userDatas.userDatas.email}</h1>
     </div>   
     
     <div className="adi">
     <button onClick={logOut} className="register-now">Log Out</button>
     </div>
    </div>
    </div>
    </div>

    </div>
  )
}

export default HomeUser