import React, { createContext } from "react";
import { useState } from "react";
import { useRef } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
 let [cart,setCart] = useState([]);

 let showbtn = useRef(false);
 let additem=(ab)=>{
  let rec = {name:ab.name,id:ab.id,count:1}
  let c=0;
  for(let i=0;i<cart.length;i++)
  {
    if(cart[i].id == ab.id)
    {
      c++
    }
  }
  if(c==0){
    setCart([...cart,rec]);
    showbtn.current=true;
    
    
  }
  else{
    let cartwa = cart.filter((l)=>{
      if(l.id != ab.id) return l;
    })
    setCart(cartwa);
    showbtn.current=false;
    
  }
 }

 
  return <CartContext.Provider value={{additem,setCart,cart}} >{children}</CartContext.Provider>;
};
