import React from 'react'
import { useCartContext } from '../context/cart_context';

export const Cart = () => {
    const {cart,clearCart,increase,decrease,del}=useCartContext();
  return (
    <>{
cart && cart.map(el=>{
    return(
        <div key={el.id}>
            <img src={el.image} alt="abc"/>
            <h2>{el.name}</h2>
            <p>${el.price*el.amount}</p>
            <button onClick={()=>decrease(el.id)}>-</button>
            <p>{el.amount}</p>
            <button onClick={()=>increase(el.id)}>+</button>
            <button onClick={()=>del(el.id)}>Delete</button>
            </div>
    )
})
    }
    <button onClick={clearCart}>Clear Cart</button>
        </>
  )
}
