import "./App.css";
// import Navbar from "./components/Navbar/Navbar"
import {Routes,Route} from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Products from "./components/Products/Products"
import Product from "./components/Products/Product/Product"
import RequiredAuth from "./hoc/RequiredAuth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<RequiredAuth><Home /></RequiredAuth>} />
        <Route path="/products" element={<RequiredAuth><Products /></RequiredAuth>} />
      </Routes>

    </div>
  );
}

export default App;
