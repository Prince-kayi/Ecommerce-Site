import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaHeart, FaAngleRight, FaSearch,FaBars} from 'react-icons/fa';
import './Card.css';
import './Cart.css';
const Header = ({ cardItem }) => {
  const [display, setDisplay] = useState(false)
  return (
    <nav>
      <button className='bars' onClick={() => setDisplay(!display)}><FaBars/> </button>
      <div className=" Lheading" >
        <button className='shop'>Shop by Department</button>
        <ul className='depart'>
          <li> Baby  & Toddlers<FaAngleRight className='angle' />
            <div className='sub-menu-1'>
              <ul>
                <li><a href="#">Baby Clothing</a></li>
                <li><a href="#">Changing & feeding </a></li>
                <li><a href="#">Baby Care & Nursery</a></li>
              </ul>
            </div>
          </li>
          <li>Beauty <FaAngleRight className='angle' />
            <div className='sub-menu-2'>
              <ul>
                <li><a href="#">Clean Beauty</a></li>
                <li><a href="#">Mens Grooming </a></li>
                <li><a href="#">Make Up</a></li>
              </ul>
            </div>
          </li>
          <li>Books <FaAngleRight className='angle' />
            <div className='sub-menu-3'>
              <ul>
                <li><a href="#">Cook Books</a></li>
                <li><a href="#">Fiction</a></li>
                <li><a href="#">Bestsellers</a></li>
              </ul>
            </div></li>
          <li>Camping<FaAngleRight className='angle' />
            <div className='sub-menu-4'>
              <ul>
                <li><a href="#">Tents & Shelters</a></li>
                <li><a href="#">Camping Furniture </a></li>
                <li><a href="#">Outdoor Cooking</a></li>
              </ul>
            </div></li>
          <li>Cellphones  & Tablets <FaAngleRight className='angle' />
            <div className='sub-menu-5'>
              <ul>
                <li><a href="#">Cellular Accessories</a></li>
                <li><a href="#">Tablets & Kindles</a></li>
                <li><a href="#">Tablet Accessories</a></li>
              </ul>
            </div></li>
          <li>Computers<FaAngleRight className='angle' />
            <div className='sub-menu-6'>
              <ul>
                <li><a href="#">Laptops</a></li>
                <li><a href="#">Desktops </a></li>
                <li><a href="#">Computer Accessories</a></li>
              </ul>
            </div></li>
          <li>Fashion <FaAngleRight className='angle' />
            <div className='sub-menu-7'>
              <ul>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">Kids</a></li>
              </ul>
            </div>
          </li>
          <li>Gaming <FaAngleRight className='angle' />
            <div className='sub-menu-8'>
              <ul>
                <li><a href="#">Playstation</a></li>
                <li><a href="#">Xbox</a></li>
                <li><a href="#">Pc Gaming</a></li>
              </ul>
            </div>
          </li>
          <li>health <FaAngleRight className='angle' />
            <div className='sub-menu-9'>
              <ul>
                <li><a href="#">Health Care</a></li>
                <li><a href="#">Wellness Store</a></li>
                <li><a href="#">Personal Care</a></li>
              </ul>
            </div>
          </li>
          <li>Home & Kitchen <FaAngleRight className='angle' />
            <div className='sub-menu-10'>
              <ul>
                <li><a href="#">Bed & Bath</a></li>
                <li><a href="#">Kitchen</a></li>
                <li><a href="#">Furniture & Decor</a></li>
              </ul>
            </div>
          </li>
          <li>Groceries & Household<FaAngleRight className='angle' />
            <div className='sub-menu-11'>
              <ul>
                <li><a href="#">BreakFast Cereals & Bars</a></li>
                <li><a href="#">Canned & Jarred Food </a></li>
                <li><a href="#">Dishwashing</a></li>
              </ul>
            </div>
          </li>
          <li>Liquor <FaAngleRight className='angle' />
            <div className='sub-menu-12'>
              <ul>
                <li><a href="#">Beers & Ciders</a></li>
                <li><a href="#">Wines</a></li>
                <li><a href="#">Whisky</a></li>
              </ul>
            </div></li>
          <li>Office & Stationary <FaAngleRight className='angle' />
            <div className='sub-menu-13'>
              <ul>
                <li><a href="#">Arts & Crafts</a></li>
                <li><a href="#">Office Furniture</a></li>
                <li><a href="#">Printers & Ink</a></li>
              </ul>
            </div>
          </li>
          <li>Pets <FaAngleRight className='angle' />
            <div className='sub-menu-14'>
              <ul>
                <li><a href="#">Dogs</a></li>
                <li><a href="#">Cats</a></li>
                <li><a href="#">Birds</a></li>
              </ul>
            </div>
          </li>
          <li>Tv <FaAngleRight className='angle' />
            <div className='sub-menu-15'>
              <ul>
                <li><a href="#">Tv's</a></li>
                <li><a href="#">Decorders </a></li>
                <li><a href="#">Headsets</a></li>
              </ul>
            </div>
          </li>
          <li>Sports <FaAngleRight className='angle' />
            <div className='sub-menu-16'>
              <ul>
                <li><a href="#">Cycling</a></li>
                <li><a href="#">Running</a></li>
                <li><a href="#">Treadmills & Bikes</a></li>
              </ul>
            </div>
          </li>
          <li>Toys <FaAngleRight className='angle' />
            <div className='sub-menu-17'>
              <ul>
                <li><a href="#">Board Games</a></li>
                <li><a href="#">Card Games</a></li>
                <li><a href="#">Puzzles</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="logo">
        <Link to="/" className='go'>BuyerAlot</Link>
        <h5>com</h5>
        <div className='search-wrap'>
          <div className='wrapper'>
            <input
              type="text"
              name='search'
              placeholder='Search for products...'
              className='search-in'
            />
            <Link to="/searchi"><FaSearch className='search' /></Link>
          </div>
          <div className='mbutton'>
            <button className='but'>Handmade</button>
            <button className='but'>Fresh Outlet</button>
            <button className='but'>Brand Stores</button>
            <button className='but'>Clearance</button>
            <button className='but'>Handmade</button>
          </div>
        </div>
      </div>
      <div className="menu-links" id={display ? "hide" : ""}>
        <ul>
          <li> <Link to="/">Home</Link></li>
        </ul>
        <ul>
          <li> <Link to="/login">Login</Link></li>
        </ul>
        <ul>
          <li><Link to="/register">Register</Link></li>
        </ul>
        <ul>
          <li ><Link to="/cart" className='shopin'><FaShoppingCart /> <span className="cart-lenght">
            {cardItem.length === 0 ? " " : cardItem.length}
          </span>
          </Link> </li>
        </ul>
        <ul>
          <li ><Link to="/lists" className='heart'><FaHeart /></Link></li>
        </ul>
      </div>
    </nav>
  )
}
export default Header
