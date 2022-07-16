import { Actiontype } from "../constants/actiontype";


// for the setproducts
export const  setProducts = (products)=>{
    return {
        type : Actiontype.SET_PRODUCTS,
        payload : products,
}

}

//  for the selected products

export const Selectedproducts = (product)=>{
    return {
        type : Actiontype.SELECTED_PRODUCTS,
        payload : product,
}

}

export const removeSelectedProduct = () => {
    return {
      type: Actiontype.REMOVE_SELECTED_PRODUCT,
    };
  };