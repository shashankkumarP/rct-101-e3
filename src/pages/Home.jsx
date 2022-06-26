import React from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Products from '../components/Products/Products'

const Home = () => {
let navigate = useNavigate();

  useEffect(()=>{
    navigate("/home/products")
  },[])
  return (
    <div>
      Home
    </div>
  )
}
export default Home

