import React,{useState} from "react";
const Register=()=>{
     const [forms,setForms]=useState({
         firstName:" ",
         lastName:" ",
         email: " ",
         retypeEmail: " ",
         password: " ",
         retypePassword: " ",
         Mnumber:" ",
         choice: false,
         SecretKey:" ",
     })
     const [UserType,setUserType]=useState("")
     const handlerChange=(e)=>
     {
             const{name,value,type,checked}=e.target
             setForms((forms)=>({
                     ...forms,
                     [name]:type==="checkbox"? checked:value
             }))
     }
    
     //validate form
  const ShowResults=(e)=>{
    if(UserType==="Admin" && forms.SecretKey!="botho29"){
       e.preventDefault();
        alert("inavlid Admin")
    }
    else{
    e.preventDefault();
         const{email,password,firstName,lastName,Mnumber,retypeEmail,retypePassword,choice}=forms
         console.log(forms)
         fetch("http://localhost:1789/kai/signUp",{
           method: "POST",
           crossDomain: true,
           headers:{
             "Content-Type": "application/json",
             Accept:"application/json",
             "Access-Control-Allow-Origin":"*",
           },
           body: JSON.stringify({
            email,
            password,
            lastName,
            firstName,
            Mnumber,
            retypeEmail,
            retypePassword,
            UserType,
            choice
           }),
     })
         .then((res)=>res.json())
         .then((data)=>{
          console.log(data,"forms")
          if(data.status==="ok"){
            alert("registration successfull")
             }
             else
             alert("something went wrong")
          
         })
        
     }
  }
    return(
        <>
        <div className="Regi">
            <div className="regi-wrap">
                <form className="reg-form" onSubmit={ShowResults}>
                    <h1 className="in"> Register</h1>
                    <br/>
                    <div>
                  Register As <input
                     type="radio"
                     name="UserType"
                     value="User"
                     onChange={(e)=>setUserType(e.target.value)}
                   />{""}
                   User
                   <input
                   type="radio"
                     name="UserType"
                     value="Admin"
                     onChange={(e)=>setUserType(e.target.value)}
                   />{""}
                   Admin
                   </div>
                   <br/>
                   {UserType==="Admin" ?(
                   <div className="reg-form-in">
                   <label>SecretKey*:
                      <input type="text" name="SecretKey" onChange={handlerChange} value={forms.SecretKey} 
                       />
                    </label>
                    </div>
):null}
                    <div className="reg-form-in">
                    <label>first Name*:
                      <input type="text" name="firstName" onChange={handlerChange} value={forms.firstName} 
                       />
                    </label>
                    </div>
                    <div  className="reg-form-in">
                    <label>
                 Last Name*:     <input type="text" name="lastName" onChange={handlerChange} value={forms.lastName}/>
                    </label>
                    
                    </div>
                    <div className="reg-form-in">
                    <label>
                 Email*:     <input type="text" name="email" onChange={handlerChange} value={forms.email} />
                    </label>
                    </div>
                    <div className="reg-form-in">
                    <label>
                 Retype Email*:     <input type="text" name="retypeEmail" onChange={handlerChange} value={forms.retypeEmail} />
                    </label>
                    </div>
                    <div className="reg-form-in">
                    <label>
                 Password*:     <input type="password" name="password" onChange={handlerChange}  value={forms.password} />
                    </label>
                    </div>
                    <div className="reg-form-in">
                    <label>
                Retype Password*:     <input type="password" name="retypePassword" onChange={handlerChange} value={forms.retypePassword}/>
                    </label>
                    </div>
                    <div className="reg-form-in">
                    <label>
                Mobile Number*:     <input type="text" name="Mnumber" onChange={handlerChange} value={forms.Mnumber}  />
                    </label>
           </div>
           <div className="boss">
               <div>
               <h4>Sign up to our Newsletters to be the first to know about our great deals!</h4>
                <div>
               <input type="checkbox" name="choice"  onChange={handlerChange}  value={forms.choice}/> <span> General Letter</span>
               </div>
               <div>
               <input type="checkbox" name="choice"  onChange={handlerChange} value={forms.choice}/> <span>Electronics</span>
               </div>
               <div>
               <input type="checkbox" name="choice" onChange={handlerChange} value={forms.choice} /><span>Books</span> 
               </div>
               <div>
               <input type="checkbox" name="choice" onChange={handlerChange} value={forms.choice}/><span>Gaming</span> 
               </div>
               <div>
               <input type="checkbox" name="choice" onChange={handlerChange} value={forms.choice}/><span>Toys</span> 
               </div>
               <div>
               <input type="checkbox" name="choice" onChange={handlerChange} value={forms.choice} /><span>Computers & Tablets</span> 
               </div>
               <div>
               <input type="checkbox" name="choice" onChange={handlerChange} value={forms.choice}/><span>Fashion</span> 
               </div>
               <div>
               <input type="checkbox" name="choice"  onChange={handlerChange} value={forms.choice}/><span>health</span> 
               </div>
               <div>
               <input type="checkbox" name="choice"  onChange={handlerChange} value={forms.choice}/><span>Music</span> 
               </div>
               <div>
               <input type="checkbox" name="choice"  onChange={handlerChange} value={forms.choice}/><span>Movies & Series</span> 
               </div>
               </div>
              <div className="bos">
              <div>
               <input type="checkbox" name="choice"  onChange={handlerChange} value={forms.choice}/><span>Office & Stationary</span> 
               </div>
               <div>
               <input type="checkbox" name="choice"  onChange={handlerChange} value={forms.choice}/> <span>Pets</span>
               </div>
               <div>
               <input type="checkbox" name="choice"  onChange={handlerChange} value={forms.choice}/><span>Tv</span>
               </div>
               <div>
               <input type="checkbox" name="choice"  onChange={handlerChange} value={forms.choice}/> <span>Sports</span> 
               </div>
               <div>
               <input type="checkbox" name="choice"  onChange={handlerChange} value={forms.choice}/> <span>Daily Deals</span>
               </div>
               <div>
               <input type="checkbox" name="choice" onChange={handlerChange} value={forms.choice}/><span>Camera</span> 
               </div>
               <div>
               <input type="checkbox" name="choice"  onChange={handlerChange} value={forms.choice}/> <span>Baby & Toddlers</span>
               </div>
               <div>
               <input type="checkbox" name="choice"  onChange={handlerChange} value={forms.choice}/><span>Beauty</span> 
               </div> 
               <div>
               <input type="checkbox" name="choice"  onChange={handlerChange} value={forms.choice}/> <span>Auto & DIY</span>
               </div>
               <div>
               <input type="checkbox" name="choice" onChange={handlerChange} value={forms.choice} /><span>Liquor</span> 
               </div>
              </div>
               <div className="regi-bottom">
                   <p>You will receive newsletters based on your interests, recent orders and browsing behaviour.</p>
                   <button className="register-now" onClick={ShowResults}> Register Now</button>
                    <div className="terms">By clicking on 'Register Now', you agree to our <a href="/terms">Terms and Conditions</a> and confirm that you are over 18 years of age</div>
               </div>
           </div>
                </form>
            </div>   
        </div>
      </>  
    );
}
export default Register