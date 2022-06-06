import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  let {togauth,login,logout} = useContext(AuthContext);
  let [loginc,setLoginc] = useState({});
  let handlechange = (e)=>{
    let {name,value} = e.target;
    setLoginc({...loginc,[name]:value})
  };
  let handlesubmit = (e)=>{
    e.preventDefault();
    login();
  }

  return (
    <div >
      <form action="" onSubmit={handlesubmit}>
        <input type="email" name="email" value={"nawalerason@gmail.com"} data-cy="login-email" onChange={handlechange} />
        <br />
        <input type="password" name="password" value={"password"} data-cy="login-password" onChange={handlechange}/>
        <br />
        <button data-cy="login-submit" type="submit">Login</button>
      </form>
      
    </div>
  );
};

export default Login;
