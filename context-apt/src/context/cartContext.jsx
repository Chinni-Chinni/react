import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext();

export const CartContextProvider = ({children}) =>{
    const [cartvalue,setcartvalue] = useState(0);

    const handlecartvalue = (value)=>{
        setcartvalue(cartvalue + value);

    }
    return <CartContext.Provider value={{cartvalue , handlecartvalue}}>{children}</CartContext.Provider>

}