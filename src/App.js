import React from "react";
import './App.css';
import "./Display.css"
import Display from "./Display";
import "./Pages/pages.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./Pages/Register";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import Zfooter from "./Footer";
import "./Footer.css"
import Login from "./Pages/Login";
import Cart from "./CART/Card";
import { CartProvider } from "./CART/CartContext";
import CardItems from "./CART/CardItems"
const App = () => { 
  return (
    <>
  <CartProvider>
    <BrowserRouter>
      <Display />
      <div className="ko">
        <ImageSlider slide={SliderData}   /> 
        <div className="second">  <ImageSlider slide={SliderData} />  </div>
        </div>
         <CardItems />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>      
  <Zfooter />
      </BrowserRouter>
      </CartProvider>
    </>
  );
}
export default App;
