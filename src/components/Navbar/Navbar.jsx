import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink


export const Navbar = () => {
  let {togauth,logout,login} = useContext(AuthContext);
  
  let navigate = useNavigate();
  let {cart} = useContext(CartContext);
  let handleclick = ()=>{
    if(togauth) logout();
    
    navigate("/")
  }
  return (
    <div data-cy="navbar" style={{display:"flex",justifyContent:"space-between"}}>
      <Link data-cy="navbar-home-link" to="/home">Home</Link>
      <div style={{display:"flex",gap:"15px"}} >
        <span data-cy="navbar-cart-items-count">cart {cart.length}</span>
        <button data-cy="navbar-login-logout-button" onClick={handleclick}>{togauth ? "logout":"login"}</button>
      </div>
      
    </div>
  );
};



// export default Navbar;
