import React from "react";
import {Link}from "react-router-dom"
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaAmazonPay, FaCcDiscover,FaCcDinersClub, FaApple } from "react-icons/fa"
import { FaFacebook,FaTwitter, FaInstagram, FaLinkedinIn,FaYoutube,FaGooglePlay} from "react-icons/fa";
const Zfooter=()=>{
return(
   <>
    <footer className="foot">
    <div className="feet">
     <div className="lwrap">
        <div className="links">
        <ul>  
       <h2>Shop</h2>  
  <li className="link"> <Link to="/">Daily Deals</Link></li>
  <li className="link"> <Link to="/">App only Deals</Link></li>
   <li className="link"><Link to="/">Clearance Sale</Link></li>
  <li className="link"><Link to="/">Gift Vouchers</Link></li> 
  </ul>
        </div>
        <div className="links">
       <ul>     
     <h2>Help</h2>
 <li className="link"><Link to="/"> Contact Us</Link></li> 
   <li className="link"><Link to="/">Submit an Idea</Link></li>
  <li className="link"><Link to="/">Suggest a Product</Link></li> 
   <li className="link"><Link to="/">Shipping & Delivery</Link></li>
 <li className="link"><Link to="/">Returns</Link></li>
 </ul>
        </div>
        <div className="links">
      <ul className="linkss">     
    <h2>Accounts</h2> 
  <li className="link"> <Link to="/">My Account</Link></li>
  <li className="link"><Link to="/">Track Order</Link></li> 
  <li className="link"><Link to="/">Personal Details</Link></li>
 <li className="link"><Link to="/">Invoices</Link></li>
   <li className="link"><Link to="/">Digital Libraries</Link></li>
   </ul>
        </div>
        <div className="links">
        <ul>   
      <h2>Company</h2>    
 <li className="link"><Link to="/">About Us</Link></li>  
  <li className="link"><Link to="/">Carrers</Link></li> 
 <li className="link"><Link to="/">Sell on BuyAlot</Link></li>  
<li className="link"><Link to="/">Press & News</Link></li>
<li className="link"><Link to="/">Competitions</Link></li> 
   <li className="link"><Link to="/">Privacy Policy</Link></li>
   <li className="link"><Link to="/">Terms & conditions</Link></li>
   <li className="link"><Link to="/">Speak Up Process</Link></li>
   </ul> 
   <div>
     </div> 
      </div> 
      <div className="links">
      <h2>Follow Us</h2>
<div className="foot2 ">
<Link to="/facebook"><FaFacebook/></Link>
<Link to="/twitter"><FaTwitter/></Link>
<Link to="/instagram"><FaInstagram/></Link>
<Link to="linkedin"><FaLinkedinIn/></Link>
<Link to="/youtube"><FaYoutube/></Link>
</div>
<div className="join">
  <h4 className="ap">Download our Apps</h4>
 <Link to="/apple"><FaApple/></Link> 
<Link to="/google"><FaGooglePlay/></Link>
</div>
</div>
</div>
<div className="middle-bot">
<Link to="/baby" > Baby  & Toddlers /</Link>
<Link to="/beauty"> Beauty  /</Link>
<Link to="/books"> Books /</Link>
<Link to="/camera"> Camera /</Link>
<Link to="/cellphones"> Cellphones /</Link>
<Link to="/comps"> Computers & Tablets /</Link>
<Link to="/fashion"> Fashion /</Link>
<Link to="/gaming"> Gaming /</Link>
<Link to="/health"> Health /</Link>
<Link to="/home and kit"> Home & Kitchen /</Link>
<Link to="/music">Music /</Link>
<Link to="/movies"> Movies & Series /</Link>
<Link to="/office"> Office & Stationary /</Link>
<Link to="/pets"> Pets/</Link>
<Link to="/tv"> TV /</Link>
<Link to="/sport"> Sport /</Link>
<Link to="/toys"> Toys /</Link>
</div>
<div className="payment">
<FaCcVisa className="pay"/>
<FaCcMastercard className="pay"/>
<FaCcPaypal className="pay"/>
<FaAmazonPay className="pay"/>
<FaCcDiscover className="pay"/>
<FaCcDinersClub className="pay" />
<p className="right">&copy; BuyAlot online(pty)  Ltd All rights reserved</p>
</div>
     </div>
 </footer>
</>
);


}
export default Zfooter