import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCartItemError, addToCartItemLoading, getCartItem } from '../store/cart/action';
export default function Cartpage() {
    const dispatch = useDispatch()

    const fetchTheCart = () => {
        dispatch(addToCartItemLoading());
        axios({
            method: "get",
            url: "  http://localhost:3002/user"

        })
            .then(res => {
                console.log(res.data)
                dispatch(getCartItem(res.data));
            })
            .catch(err => {
                dispatch(addToCartItemError());
            })
    }

    useEffect(() => {
        fetchTheCart();
    }, [])
    return (
        <div></div>
    )
}
