import React,{createContext,useContext,useReducer} from "react";

const CartContext=createContext();

const reducer=(state,action)=>{
    if(action.type==="INCREASE")
    {
        const newItem=state.cart.map(el=>{
            if(el.id===action.payload)
            {
                return {...el,
                amount:el.amount+1}
            }
            return el;
        })
        return {...state,cart:newItem}
    }
    else if(action.type==="DECREASE")
    {
        const newItem=state.cart.map(el=>{
            if(el.id===action.payload && el.amount>1)
            {
                return {...el,
                amount:el.amount-1}
            }
            return el;
        })
        return {...state,cart:newItem}
    }
    else if(action.type==="DELETE")
    {
        const newItem=state.cart.filter(el=>el.id!==action.payload);
        return {...state,cart:newItem}
    }
    else if(action.type==="CLEAR")
    {
        return {...state,cart:[]}
    }
    else if(action.type==="ADD")
    {
        const {id,product,amount}=action.payload;
        const newItem=state.cart.find(el=>el.id===id);
        if(!newItem)
        {
            const item={
                id,
                name:product.name,
                price:product.price,
                amount:product.amount,
                image:product.image
            }
            return {...state,cart:[...state.cart,item]}
        }
        else{
            console.log(amount);
            const tempItem=state.cart.map(el=>{
                if(el.id===newItem.id)
                {
                    return {...el,
                    amount:newItem.amount+amount}
                }
                return el;
            })
            return {...state,cart:tempItem}
        }
    }
    else if(action.type==="FAV")
    {
        const {id,product}=action.payload;
        
            const item={
                id,
                name:product.name,
                price:product.price,
                amount:product.amount,
                image:product.image
            }
            return {...state,fav:[...state.fav,item]}
        }
    
    return state;
}
const initialState={
    cart:[],
    fav:[],
    total:0
}

const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    React.useEffect(()=>{
        const total=state.cart.reduce((acc,el)=>{
            return acc=acc+(el.amount*el.price);
        },0)
        console.log(total);
    },[state.cart])

    const add=(id,product,amount)=>{
        dispatch({type:"ADD",payload:{id,product,amount}});
    }
    const clearCart=()=>{
        dispatch({type:"CLEAR"})
    }
    const increase=(id)=>{
        dispatch({type:"INCREASE",payload:id});
    }
    const decrease=(id)=>{
        dispatch({type:"DECREASE",payload:id});
    }
    const del=(id)=>{
        dispatch({type:"DELETE",payload:id});
    }

    const favorite=(id,product)=>{
        dispatch({type:"FAV",payload:{id,product}})
    }
    return(
        <CartContext.Provider value={{...state,increase,decrease,del,clearCart,add,favorite}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext=()=>{
    return useContext(CartContext)
}
export {CartContext,CartProvider}