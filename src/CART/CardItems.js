import React,{useState}from 'react'
import CardList from './CardList'
import Card from './Card'
 
const CardItems = () => {
  const [cart,setCart]=useState([]) 

  const handle=(item)=>{
    cart.push(item)
    console.log(cart)
  }
  return (
    <div className='wrap'>
      {CardList.map(item=>(
        <Card key={item.id} item={item}  handle={handle}/>
      ))}
    </div>
  )
}

export default CardItems
