import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product/Product";
import { Link } from "react-router-dom";
import styles from "./Product.module.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const Products = () => {
  let [count,setCount] = useState(0)
  let [items,setItems] = useState([]);
  let [iscart,setIscart] = useState(false);
  let {additem,setCart,cart} = useContext(CartContext);

  let handleclick =(a)=>{
    let abc = additem(a);
  }
  let handlechangetext =(a)=>{
    let c= 0;
    for(let i=0;i<cart.length;i++)
    {
      if(cart[i].id ==a.id) c++;
    }
    if(c==0){
      return "Add to cart";
      
    }
    else{
      return "Remove from Cart"
    }
  }
  let handlechangecount =(a,b)=>{
   
    if(a=="inc"){
      let cha = cart.filter((l)=>{
        if(l.id == b.id){
          let a = l.count +1 ;
          l.count=a;
        }
        return l;
      })
      setCart(cha);
      console.log(cha);
    }
    else{
      let cha = cart.filter((l)=>{
        if(l.id == b.id){
          let a = l.count;
          if(a>0) a= a-1;
          l.count=a;
        }
        return l;
      })
      setCart(cha);
      console.log(cha);
    }

  }
  let showcount = (a)=>{
    let c=0;
    let b;
    for(let i=0;i<cart.length;i++)
    {
      if(cart[i].id == a.id){
        c++;
        b= cart[i].count;
      }
    }
    if(c==0) return 0;
    else{
      return b;
    }
  }
  useEffect(()=>{
    fetch("http://localhost:8080/products").then((res)=>res.json()).then((data)=>{setItems(data)});
  },[])
  return( 
    <>
    <h1>Products</h1>
  <div className={styles.main}   >
    
    {items.map((l)=>(
      <div className={styles.main1} key={l.id} >
      
      <h5>{l.name}</h5>
      <p>{l.description}</p>
      <div className={styles.m1}>
        <div className={styles.m2}>
          <button onClick={()=>{handlechangecount("inc",l)}} >+</button>
          {showcount(l)}
          <button>-</button>
        </div>
        
        <button onClick={()=>{handleclick(l)}}>{handlechangetext(l)}</button>
      </div>
      

    </div>
    ))}
  </div>
  </>
  );
};

export default Products;
