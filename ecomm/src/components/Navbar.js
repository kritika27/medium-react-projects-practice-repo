import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
        <h1>Logo</h1>
        <ul>
           <NavLink to="/"> <li>Home</li></NavLink>
           <NavLink to="/products"> <li>Products</li></NavLink>
           <NavLink to="/fav"> <li>Favorites</li></NavLink>
           <NavLink to="/cart"> <li>Cart</li></NavLink>
        </ul>

    </nav>
  )
}

export default Navbar