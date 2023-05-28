import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import Navbar from "./components/Navbar";
import SingleProduct from "./pages/SingleProduct";
import Favorites from "./pages/Favorites";

function App() {
  return (
   <>
   <Navbar/>
  
     <Routes>
       
       <Route path="/" element={<Home/>}/>
       <Route path="/products" element={<Products/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/products/:id" element={<SingleProduct/>}/>
       <Route path="/fav" element={<Favorites/>}/>
     </Routes>
     </>
  );
}

export default App;
