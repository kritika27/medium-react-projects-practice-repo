import React,{useState} from 'react'
import { useGlobalContext } from '../context/product_context';
import { CartContext, useCartContext } from '../context/cart_context';
import { NavLink } from 'react-router-dom';

export const Products = () => {
    const {product,inc,dec} =useGlobalContext();
    const {add,favorite}=useCartContext();
    const total=(product.length/5)+1;
const [page,setPage]=useState([...Array(total).keys()].slice(1));
const [start,setStart]=useState(1);
console.log(page);
  return (
      <>
    <div>
        {
            product && product.slice(5*(start-1),start*5).map(el=>{
                const {id,name,image,price,amount} =el;
                return(
                    <div key={id}>
                        <img src={image} alt={name}/>
                        <h2>{name}</h2>
                        <p>${price}</p>
                        <button onClick={()=>dec(id)}>-</button>
                        <p>{amount}</p>
                        <button onClick={()=>inc(id)}>+</button>
                        <button onClick={()=>add(id,el,amount)}>Add To Cart</button>
                        <button onClick={()=>favorite(id,el)}>Add To Favorites</button>
<NavLink to={`/products/${id}`}>View in Detail</NavLink>
                        </div>
                )
            })
        }
        
    </div>
    <div>
        {
            page.map((el,index)=>{
                return(
                    <button key={index} onClick={()=>setStart(el)}>{el}</button>
                )
            })
        }
    </div>
    </>
  )
}
