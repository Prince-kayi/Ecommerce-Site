import React, { useState } from 'react'
import { FaCaretDown, FaHeart, FaShoppingCart, FaSearch, FaCaretRight } from "react-icons/fa"
import { Link, BrowserRouter } from 'react-router-dom';
import Acc from './Acc';
const Display = () => {
  const [accDrop, setDrop]=useState(false)

  return (
    <>
      <nav>
        <div className="logo">
          <h3>BuyerAlot</h3>
          <h5>com</h5>
        <div className=" Lheading">
          <ul className='rhead'>
        <li className='rheadi'><Link to="/help">Help</Link></li>  
        <li className='rheadi'>  <Link to="/sell">Sell on BuyerAlot</Link></li>
       </ul>
       </div>
        </div>
        <div className="Rheading">
          <ul className="rhead">
          <li className='rheadi'> <Link to="/login">Login</Link></li> 
            <li className='rheadi'><Link to="/register">Register</Link></li>
            <li className='rheadi'><Link to="/orders">Orders</Link></li>
           <li
            onMouseEnter={()=>setDrop(true)}
            onMouseLeave={()=>setDrop(false)}
            className='rheadi'
           >
             <Link to="/account">My Account <FaCaretDown /></Link>
         { accDrop && <Acc/>}
           </li> 
           
           <li className='heart'><Link to="/lists"><FaHeart /></Link></li> 
            <li className='shopin'><Link to="/cart"><FaShoppingCart /></Link></li>
          </ul>
        </div>
      </nav>
     <div className='centa'>
      <div className="middle">
        <div className="Lmiddle">
         <div>   
         <button className='label'> Shop by Department</button>
         <ul className="dep"> 
                <li className="depi"> Baby  & Toddlers<FaCaretRight /></li>
                <li className="depi">Beauty <FaCaretRight /></li>
                <li className="depi">Books <FaCaretRight /></li>
                <li className="depi">Camera <FaCaretRight /></li>
                <li className="depi">Cellphones <FaCaretRight /></li>
                <li className="depi">Computers & Tablets <FaCaretRight /></li>
                <li className="depi">Fashion <FaCaretRight /></li>
                <li className="depi">gaming <FaCaretRight /></li>
                <li className="depi">health <FaCaretRight /></li>
                <li className="depi">Home & Kitchen <FaCaretRight /></li>
                <li className="depi">Music <FaCaretRight /></li>
                <li className="depi">Movies & Series <FaCaretRight /></li>
                <li className="depi">Office & Stationary <FaCaretRight /></li>
                <li className="depi">Pets <FaCaretRight /></li>
                <li className="depi">Tv <FaCaretRight /></li>
                <li className="depi">Sports <FaCaretRight /></li>
                <li className="depi">Toys <FaCaretRight /></li>
                <li className="depi">Vouchers <FaCaretRight /></li>    
              </ul>         
         </div>        
         </div>        
      <div className='form'>
        <div className="dbuttons">
        <input type="text"
          placeholder="Search for products,brand..."
          name="look"
          size="115" 
          />
        <select>
          <option>All Departments</option>
          <option value="baby & toddlers">Baby & Toddlers</option>
          <option value="beauty">Beauty</option>
          <option value="books">Books</option>
          <option value="camera">Camera</option>
          <option value="cellphones">Cellphones</option>
          <option value="computers & tablets">Computers & Tablets</option>
          <option value="fashion">Fashion</option>
          <option value="gaming">gaming</option>
          <option value="Health">health</option>
          <option value="home & kitchen">Home & Kitchen</option>
          <option value="music">Music</option>
          <option value="movies & series">Movies & Series</option>
          <option value="office & stationary">Office & Stationary</option>
          <option value="pets">Pets</option>
          <option value="tv">Tv</option>
          <option value="sports">Sports</option>
          <option value="toys">Toys</option>
          <option value="vouchers">Vouchers</option>
        </select>
        <Link to="/search" className='search'><FaSearch /></Link>
<div className='mbutton'>       
          <button className='but'>Fresh Fashion</button>
          <button  className='but'>Handmade</button>
          <button  className='but'>Fresh Outlet</button>
          <button  className='but'>Brand Stores</button>
          <button  className='but'>Clearance</button>
          <button  className='buti'>Exclusive to BuyerAlot</button>
          <button  className='buti'>Deals & Promotions</button>
          <button  className='but'>New to BuyerAlot</button>
   </div>      
    </div>        
</div>
     </div>
      </div>  
    </>
  )
}
export default Display
