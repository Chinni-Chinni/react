import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

export default function Cart() {
    const {handlecartvalue} = useContext(CartContext);
  return (
    <div>
        <button onClick={()=> { handlecartvalue(1)}}>Click me!</button>
    </div>
  )
}
