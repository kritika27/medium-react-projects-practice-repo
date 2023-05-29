import React from 'react'
import { useCartContext } from '../context/cart_context';
const Favorites = () => {
    const {fav}=useCartContext();
    console.log(fav);
  return (
    <div>{
        // <p>hello</p>
        fav && fav.map(el=>{
            return(
                <div key={el.id}>
                    <img src={el.image} alt={el.name}/>
                    <h2>{el.name}</h2>
                    <p>${el.price}</p>
                    <button>Delete</button>
                    <button>Move To Cart</button>
                    </div>
            )
        })
    }</div>
  )
}

export default Favorites