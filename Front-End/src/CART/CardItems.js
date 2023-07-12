import React from 'react'
import {Routes,Route} from "react-router-dom";
import Card from './Card';
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import CartContext from "../CART/CartContext";
import WishList from '../Pages/WishList';
import Slider from '../Slider';
import Remember from '../Pages/Remember';
const isLoggedIn = window.localStorage.getItem("LoggedIn")
const Routez = ({CardList,cardItem, AddToCart,RemoveItems,ClearCart}) => {
  return (
    <div>
    <Routes>
          <Route path="/" element={isLoggedIn =="true" ?<Slider />: <Login/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/lists" element={<WishList/>} />
          <Route path="/slider" element={<Slider/>} />
          <Route path="/forgot" element={<Remember/>}/>
          <Route path="/cart" element={<CartContext cardItem={cardItem} AddToCart={ AddToCart} 
           RemoveItems={RemoveItems} 
           ClearCart={ClearCart}
           />} />
         
        </Routes> 
    </div>
  )
}
export default Routez
