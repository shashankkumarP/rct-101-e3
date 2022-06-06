import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const RequiredAuth = ({ children }) => {
  let {pathname} = useLocation();

  let {togauth} = useContext(AuthContext);
  if(togauth){
    return children;
  }
  else{
    return <Navigate to="/"  />
  }
  
};

export default RequiredAuth;
