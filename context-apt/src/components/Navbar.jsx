import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext';

export default function Navbar() {
    const {cartvalue} = useContext(CartContext);
  return (
    <div>cart : {cartvalue}</div>
  )
}
