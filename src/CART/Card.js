import React,{useState} from "react";
import { CartContext } from "./CartContext";
 const Card=({item,handle})=> {
    const{id,title,img,desc}=item;
    return (
        <>     
            <div className="cards">
                <div className="card_body">
                    <img src={img} className="card-ima" />
                    <h2 className="card-title">{title}</h2>
                    <p className="card-desc">{desc}</p>
                </div>
                <button className="aries" onClick={()=>handle(item)}>Add to Cart</button>
            </div>
        </>
    );
}
export default Card