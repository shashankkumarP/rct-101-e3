import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product/Product";
import { Link } from "react-router-dom";
import styles from "./Product.module.css"

const Products = () => {
  let [count,setCount] = useState(0)
  let [items,setItems] = useState([]);
  let [iscart,setIscart] = useState(false);
  let handleclick =()=>{
    if(iscart) setIscart(true)
    else setIscart(false);
  }
  useEffect(()=>{
    fetch("http://localhost:8080/products").then((res)=>res.json()).then((data)=>{setItems(data)});
  },[])
  return( 
  <div className={styles.main}   >
    {items.map((l)=>(
      <div className={styles.main1}>
      
      <h5>{l.name}</h5>
      <p>{l.description}</p>
      <div className={styles.m1}>
        <div className={styles.m2}>
          <button>+</button>
          {count}
          <button>-</button>
        </div>
        <button onClick={handleclick}>{iscart ? "Remove from cart":"Add to cart"}</button>
      </div>
      

    </div>
    ))}
  </div>);
};

export default Products;
