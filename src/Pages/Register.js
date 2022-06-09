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
         choice: false

     })

     const handlerChange=(e)=>
     {
             const{name,value,type,checked}=e.target
             setForms((forms)=>({
                     ...forms,
                     [name]:type=="checkbox"? checked:value
             }))
     }

     const ShowResults=()=>{
         console.log("forms",forms)
     }

     const onSubmit=(e)=>{
         e.preventDefault();

     }
    return(
        <>
        <div className="Regi">
            <div className="regi-wrap">
                <form className="reg-form" onSubmit={onSubmit}>
                    <h1 className="in"> Register</h1>
                    <div className="reg-form-in">
                    <label>first Name*:
                      <input type="text" name="firstName" onChange={handlerChange} value={forms.firstName}  required/>
                    </label>
                    </div>
                    <div  className="reg-form-in">
                    <label>
                 Last Name*:     <input type="text" name="lastName" onChange={handlerChange} value={forms.lastName} required/>
                    </label>
                    </div>
                    <div className="reg-form-in">
                    <label>
                 Email*:     <input type="text" name="email" onChange={handlerChange} value={forms.email} required/>
                    </label>
                    </div>
                    <div className="reg-form-in">
                    <label>
                 Retype Email*:     <input type="text" name="retypeEmail" onChange={handlerChange} value={forms.retypeEmail} required/>
                    </label>
                    </div>
                    <div className="reg-form-in">
                    <label>
                 Password*:     <input type="text" name="password" onChange={handlerChange}  value={forms.password} required/>
                    </label>
                    </div>
                    <div className="reg-form-in">
                    <label>
                Retype Password*:     <input type="text" name="retypePassword" onChange={handlerChange} value={forms.retypePassword} required/>
                    </label>
                    </div>
                    <div className="reg-form-in">
                    <label>
                Mobile Number*:     <input type="text" name="Mnumber" onChange={handlerChange} value={forms.Mnumber} required />
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
                    <p>By clicking on 'Register Now', you agree to our <a href="/terms">Terms and Conditions</a> and confirm that you are over 18 years of age</p>
               </div>
           </div>
                </form>
            </div>
            
        </div>
      </>  
    )

;


}
export default Register