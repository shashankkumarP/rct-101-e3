import React, { createContext } from "react";
// import { useReducer } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  let navigate = useNavigate();
  // let {state} = useLocation();
  let [togauth ,setTogauth] = useState(false);
  let login = ()=>{
    setTogauth(true);
   
      navigate("/home")
    
    
  }
  let logout = ()=>{
    setTogauth(false)
    navigate("/")
  }

  return <AuthContext.Provider value={{togauth,login,logout}}>{children}</AuthContext.Provider>;
};
