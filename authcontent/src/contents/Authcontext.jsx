import { useState } from "react";
import { createContext } from "react";

import axios from "axios";

export const AuthContext = createContext();

export const LoginAuth = ({ children }) => {

    const [token, settoken] = useState(null);

    const handleLogin = (body) => {

        axios({
            method:"post",
            url:"https://reqres.in/api/login",
            data:body

        })
        .then((res)=>settoken(res.data))
        .catch((err)=>console.log(err));
    }


    const value = {
        handleLogin,
        token,
        settoken
    }
    console.log(token)

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )

}