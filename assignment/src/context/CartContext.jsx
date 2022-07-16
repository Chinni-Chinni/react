import axios from "axios";
import React, { createContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setcart] = useState(0);


  const fetchCart = () => {
    axios({
      method: "get",
      url: `http://localhost:8080/cartItems`
    })
      .then(res => {setcart(res.data)})
      .catch((err) => console.log(err));
  }


  useEffect(() => {
    fetchCart();
  }, [])

// console.log(cart)
  // HANDLE ADD TO CART

  const handleAddToCart = (id) => {
    const item = cart.find((el) => el.productId === id);
    // console.log(item)
    if (item === undefined) {
      axios({
        method: "post",
        url: " http://localhost:8080/cartItems",
        data: {
          count: 1,
          productId: id,
          id,
        }
      }).then(res =>{
        console.log("handle");
        fetchCart()
      })
       

      
    } 
    else {
      axios({
        method: "patch",
        url: ` http://localhost:8080/cartItems/${id}`,
        data: {
          count: item.count + 1

        }
      })
        
      .then(res =>{
        console.log("handle");
        fetchCart()
      })

    }

  }


  // HANDLE INCREMENT

  const handleIncrement = (id) => {
    const item = cart.find((el) => el.productId === id);
  
    axios({
        method: "patch",
        url: `http://localhost:8080/cartItems/${id}`,
        data: {
          count: item.count + 1

        }
      })
    
      .then(res =>{
        console.log("handle");
        fetchCart()
      })

  }

  

  // HANDLE DECREMENT

  const handleDecrement = (id) => {
    const item = cart.find((el) => el.productId === id);
    if(item.count===1){
      axios({
        method: "delete",
        url: `http://localhost:8080/cartItems/${id}`,
      })
      .then(res =>{
        console.log("handle");
        fetchCart()
      })
    }
  else{
    axios({
        method: "patch",
        url: `http://localhost:8080/cartItems/${id}`,
        data: {
          count: item.count - 1

        }
      })
      .then(res =>{
        console.log("handle");
        fetchCart()
      })
    }

  }

  // HANDLE REMOVE

  const handleRemove = (id) => {
    // const item = cart.find((el) => el.productId === id);
  
    axios({
        method: "delete",
        url: `http://localhost:8080/cartItems/${id}`,
      })
       
      .then(res =>{
        console.log("handle");
        fetchCart()
      })

  }

  const value = {

    cart, handleAddToCart, handleIncrement, handleDecrement, handleRemove

  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
