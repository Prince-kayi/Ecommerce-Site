import React, { useState } from "react";
import './App.css';
import "./Display.css"
import "./Pages/pages.css";
import { BrowserRouter} from "react-router-dom";
import Zfooter from "./Footer";
import "./Footer.css"
import Header from "./CART/Cart";
import Goods from "./CART/CardList";
import Routez from "./CART/CardItems";
const App = () => { 
  const [cardItem,setCardItem]=useState([])
  const {CardList}=Goods;
  const AddToCart =(things)=>{
    const ExistThings=cardItem.find((item)=>item.id === things.id);
    if(ExistThings){
      setCardItem(cardItem.map((item)=> item.id ===things.id ?
       {...ExistThings,quantity:ExistThings.quantity+1}:item)
      )
    }
      else{
         setCardItem([...cardItem,{...things,quantity:1}])
      }
  }
  const RemoveItems=(things)=>{
    const ExistThings=cardItem.find((item)=>item.id === things.id);
    if(ExistThings.quantity===1){
      setCardItem(cardItem.filter((item)=>item.id !== things.id))
    }
    else{
      setCardItem(
        cardItem.map((item)=>item.id===things.id?
        {...ExistThings,quantity:ExistThings.quantity-1}:item)
      )
    }
  }
  const ClearCart=()=>{
    setCardItem([]);
  }
  return (
    <>
    <BrowserRouter>
    <Header cardItem={cardItem}  />
    <Routez CardList={CardList} 
    cardItem={cardItem} 
    AddToCart={AddToCart}
    RemoveItems={RemoveItems}
     ClearCart={ClearCart}
    />
    <Zfooter />
      </BrowserRouter>
    </>
  );
}
export default App;
