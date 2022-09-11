import React from 'react'
import './Cartem.css';
const CartContext = ({cardItem,RemoveItems,AddToCart,ClearCart}) => {
  const TotalPrices = cardItem.reduce((desc,item)=>desc + item.quantity*item.desc,0)
  return (
    <div className='cart-item'>
    <h2 className='cart-head'>  Cart is here</h2>
   <div className='clear-cart'>
    {cardItem.length >=1 &&(<button className='clear-cart-button' onClick={()=>ClearCart()}>Clear cart</button>)}
   </div>
   {cardItem.length === 0 && (<div className='cart-empty'>No items addedd.</div>)}
    
    {cardItem.map((item)=>(
      <div key={item.id} className="cart-lists">
        <img  className="cart-images"  
        src={item.imag}
        alt={item.title}
      />
        <div className='cart-name'>{item.title}</div>
        <div className='decision'>
          <button className='add-to-cart'
          onClick={()=>AddToCart(item)}
          >+</button>
          <button className='remove-to-cart' 
          onClick={()=>RemoveItems(item)}
          >-</button>
        </div>
      <div className='cart-price'>
      {item.quantity}*${item.desc}
      </div>
      </div>
    ))}
    <div className='cart-total-name'>
        Total Price
        <div className='cart-total-price'>${TotalPrices}</div>
      </div>
    </div>
  )
}

export default CartContext
