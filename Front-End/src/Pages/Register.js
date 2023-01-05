import React,{useState} from "react";
import axios from "axios"
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
     })
     const [errors,setError]=useState({
        firstName:" ",
        lastName:" ",
        email: " ",
        retypeEmail: " ",
        password: " ",
        retypePassword: " ",
        Mnumber:" ",
     })
     const handlerChange=(e)=>
     {
             const{name,value,type,checked}=e.target
             setForms((forms)=>({
                     ...forms,
                     [name]:type==="checkbox"? checked:value
             }))
     }
    
     //validate form
     const onSubmit=(e)=>{
         e.preventDefault();
        // setError(ValidRegisters(errors))

        if (forms.firstName===" " ||forms.lastName===""|| forms.email==="" || forms.password===""|| forms.Mnumber===""){
            setError((forms)=>({
            ...forms,
            firstName:"Please enter your first Name",
            lastName:"Please enter  your Last Name",
            email:"Please enter your email address",
            password:"Please enter  your password",
            Mnumber:"Please enter a Phone/Mobile number"    
            }));
       return;
         }     
          else  {
            setError((forms)=>({
                ...forms,
                firstName:" ",
                lastName: " "    
            }))          
     } 
    }  
  const ShowResults=()=>{
         console.log("forms",forms)
         const registered={
            firstName:forms.firstName,
            lastName:forms.lastName,
            email:forms.email,
            retypeEmail:forms.retypeEmail,
            password:forms.password,
            retypePassword:forms.retypePassword,
            Mnumber:forms.Mnumber,
            choice:forms.choice,
         }
         axios.post("http://localhost:1789/kai/signup",registered)
         .then(res=>console.log(res.data))
         setForms({
            firstName:" ",
            lastName:" ",
            email: " ",
            retypeEmail: " ",
            password: " ",
            retypePassword: " ",
            Mnumber:" ",
            choice: false,
         })
     }
    
    return(
        <>
        <div className="Regi">
            <div className="regi-wrap">
                <form className="reg-form" onSubmit={onSubmit}>
                    <h1 className="in"> Register</h1>
                    <div className="reg-form-in">
                    <label>first Name*:
                      <input type="text" name="firstName" onChange={handlerChange} value={forms.firstName} 
                       />
                    </label>
                     {!!errors.firstName &&<div className="errors-msg">{errors.firstName}</div>}
                    </div>
                    <div  className="reg-form-in">
                    <label>
                 Last Name*:     <input type="text" name="lastName" onChange={handlerChange} value={forms.lastName}/>
                    </label>
                    {!!errors.lastName && <div className="errors-msg">{errors.lastName}</div>}
                    </div>
                    <div className="reg-form-in">
                    <label>
                 Email*:     <input type="text" name="email" onChange={handlerChange} value={forms.email} />
                    </label>
                    {!!errors.email && <div className="errors-msg">{errors.email}</div>}
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
                    {!!errors.password &&<div className="errors-msg">{errors.password}</div>}
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
                    {!!errors.Mnumber && <div className="errors-msg">{errors.Mnumber}</div>}
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