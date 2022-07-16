
import React from "react";
import { useContext } from "react";
import Products from "../components/Products"
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
const Home = () => {

  const {  cart} = useContext(CartContext);
  const {token} = useContext(AuthContext);
  console.log(cart);
  return token ? <div>
    {/* <h3>{cart.reduce((previousValue, currentValue) => previousValue + currentValue.count,cart.length)}</h3> */}
    <h1></h1>
    <Products />
  
  </div>:"plese login to see products";
};

export default Home;
