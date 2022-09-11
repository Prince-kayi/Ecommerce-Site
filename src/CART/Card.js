import React,{useState} from "react";
import './Cart.css'
import { SliderData } from "../Pages/SliderData";
import ImageSlider from "../Pages/ImageSlider";
 const Card=({CardList,AddToCart})=> {
return (
        <>    
        <div className="ko">
        <ImageSlider slide={SliderData}   /> 
        <div className="second">  <ImageSlider slide={SliderData} />  </div>
        </div> 
            <div className="product">
                {CardList.map((cardLists)=>(
                <div className="card">
                   <div>
                    <img src={cardLists.imag} alt={cardLists.name}  className="images"/>
                   </div>
                <div>
                 <h4 className="product-name">
                  {cardLists.title}
                 </h4>
                </div>
                <div>
                <h4 className="product-price" >
                   ${cardLists.desc}
                </h4>
                </div>
                <button className="aries"onClick={()=>AddToCart(cardLists)}>Add to Cart</button>  
                </div>
                ))}
            </div>
        </>
    );
}
export default Card