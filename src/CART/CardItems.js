import React from 'react'
import {Routes,Route} from "react-router-dom";
import Card from './Card';
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import CartContext from "../CART/CartContext";
import WishList from '../Pages/WishList';
const Routez = ({CardList,cardItem, AddToCart,RemoveItems,ClearCart}) => {
  return (
    <div>
    <Routes>
          <Route path="/" element={<Card CardList={CardList}  AddToCart={ AddToCart}/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/lists" element={<WishList/>} />
          <Route path="/cart" element={<CartContext cardItem={cardItem} AddToCart={ AddToCart} 
           RemoveItems={RemoveItems} 
           ClearCart={ClearCart}
           />} />
         
        </Routes> 
    </div>
  )
}
export default Routez
