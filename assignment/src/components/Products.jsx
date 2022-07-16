import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Productitem from "./ProductItem"
const Products = () => {
  const [Products, setproducts] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: " http://localhost:8080/products",
    })
      .then((res) => setproducts(res.data))
      .catch((err) => console.log(err))

  }, [])
  // console.log(Products)

  return (
    <div>

     {
  Products.map((data)=> <Productitem  data = {data}/>)} 

    </div>
  )
};

export default Products;
