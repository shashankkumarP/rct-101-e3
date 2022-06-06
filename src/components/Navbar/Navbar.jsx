import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// use react-router Link or NavLink


export const Navbar = () => {
  let {togauth,logout,login} = useContext(AuthContext);
  let [count ,setCount] = useState(0);
  let navigate = useNavigate();
  let handleclick = ()=>{
    if(togauth) logout();
    
    navigate("/")
  }
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/home">Home</Link>
      <span data-cy="navbar-cart-items-count">cart {count}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleclick}>{togauth ? "logout":"login"}</button>
    </div>
  );
};



// export default Navbar;
