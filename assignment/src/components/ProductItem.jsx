import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductItem = (props) => {
  const { name,id,description } = props.data;

  const {  cart, handleAddToCart, handleIncrement, handleDecrement, handleRemove} = useContext(CartContext);
  console.log(cart);
  // const noOfCount = cart.find((el) => el.productId === id)?.count;
  // console.log(noOfCount);
  return <div>
    

    <h3 className="name">{name}</h3>
    <p className="description">{description}</p>
    {/* <div>{cart.find((el) => el.productId === id).count}</div> */}
    <button onClick={()=>handleAddToCart(id)}>Add to Cart</button>
    <button onClick={()=>handleIncrement(id)}>Increment</button>
    <button onClick={()=>handleDecrement(id)}>Decrement</button>
    <button onClick={()=>handleRemove(id)}>Remove</button>

  </div>;
};

export default ProductItem;
