import React,{useState} from "react";
const Register=()=>{
    return(
        <>
        <div className="Regi">
            <div className="regi-wrap">
                <form className="reg-form">
                    <h1 className="in"> Register</h1>
                    <div className="reg-form-in">
                    <label>first Name*:
                      <input type="text" name="firstName" />
                    </label>
                    </div>
                    <div  className="reg-form-in">
                    <label>
                 Last Name*:     <input type="text" name="lastName" />
                    </label>
                    </div>
                    <div className="reg-form-in">
                    <label>
                 Email*:     <input type="text" name="email" />
                    </label>
                    </div>
                    <div className="reg-form-in">
                    <label>
                 Retype Email*:     <input type="text" name="retype-email" />
                    </label>
                    </div>
                    <div className="reg-form-in">
                    <label>
                 Password*:     <input type="text" name="password" />
                    </label>
                    </div>
                    <div className="reg-form-in">
                    <label>
                Retype Password*:     <input type="text" name="retype-password" />
                    </label>
                    </div>
                    <div className="reg-form-in">
                    <label>
                Mobile Number*v:     <input type="text" name="number" />
                    </label>
           </div>
           <div className="boss">
               <div>
               <h4>Sign up to our Newsletters to be the first to know about our great deals!</h4>
                <div>
               <input type="checkbox" name="newsletter" /> <span> General Letter</span>
               </div>
               <div>
               <input type="checkbox" name="newsletter" /> <span>Electronics</span>
               </div>
               <div>
               <input type="checkbox" name="newsletter" /><span>Books</span> 
               </div>
               <div>
               <input type="checkbox" name="newsletter" /><span>Gaming</span> 
               </div>
               <div>
               <input type="checkbox" name="newsletter" /><span>Toys</span> 
               </div>
               <div>
               <input type="checkbox" name="newsletter" /><span>Computers & Tablets</span> 
               </div>
               <div>
               <input type="checkbox" name="newsletter" /><span>Fashion</span> 
               </div>
               <div>
               <input type="checkbox" name="newsletter" /><span>health</span> 
               </div>
               <div>
               <input type="checkbox" name="newsletter" /><span>Music</span> 
               </div>
               <div>
               <input type="checkbox" name="newsletter" /><span>Movies & Series</span> 
               </div>
               </div>
              <div className="bos">
              <div>
               <input type="checkbox" name="newsletter" /><span>Office & Stationary</span> 
               </div>
               <div>
               <input type="checkbox" name="newsletter" /> <span>Pets</span>
               </div>
               <div>
               <input type="checkbox" name="newsletter" /><span>Tv</span>
               </div>
               <div>
               <input type="checkbox" name="newsletter" /> <span>Sports</span> 
               </div>
               <div>
               <input type="checkbox" name="newsletter" /> <span>Daily Deals</span>
               </div>
               <div>
               <input type="checkbox" name="newsletter" /><span>Camera</span> 
               </div>
               <div>
               <input type="checkbox" name="newsletter" /> <span>Baby & Toddlers</span>
               </div>
               <div>
               <input type="checkbox" name="newsletter" /><span>Beauty</span> 
               </div> 
               <div>
               <input type="checkbox" name="newsletter" /> <span>Auto & DIY</span>
               </div>
               <div>
               <input type="checkbox" name="newsletter" /><span>Liquor</span> 
               </div>
              </div>
               <div className="regi-bottom">
                   <p>You will receive newsletters based on your interests, recent orders and browsing behaviour.</p>
                   <button className="register-now"> Register Now</button>
                    <p>By clicking on 'Register Now', you agree to our <a href="/terms">Terms and Conditions</a> and confirm that you are over 18 years of age</p>
               </div>
           </div>
                </form>
            </div>
            <hi></hi>
        </div>
      </>  
    )

;


}
export default Register