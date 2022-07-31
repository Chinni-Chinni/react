import { ADD_TO_CART_ERROR, ADD_TO_CART_ITEM, ADD_TO_CART_LOADING, CLEAR_CART_ITEM, DEC_CART_ITEM, DELETE_CART_ITEM, GET_CART_ITEM, INC_CART_ITEM } from "./actiontype"


export const addToCartItem = ()=>{
 return {
    type : ADD_TO_CART_ITEM
 }
}

export const addToCartItemLoading = ()=>{
    return{
        type : ADD_TO_CART_LOADING,
    }
}

export const addToCartItemError = () =>{
    return {
        type : ADD_TO_CART_ERROR,
    }
}

export const incCartItem = ()=>{
    return {
        type : INC_CART_ITEM
    }
}

export const decCartItem = ()=>{
    return {
        type : DEC_CART_ITEM,
    }
}

export const deleteCartItem = ()=>{
    return {
        type : DELETE_CART_ITEM,
    }
}

export const clearCartItem = ()=>{
    return {
        type  : CLEAR_CART_ITEM, 
        
    }
}


export const getCartItem = (payload)=>{
    return {
        type : GET_CART_ITEM,
        payload
    }
}