import React, { createContext, useState } from "react";
import axios from "axios"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [token,settoken] = useState(null);

  const handleLogin = (body)=>{
    axios({
      method : "POST",
      url : "https://reqres.in/api/login",
      data : body

    })
    // .then((res)=>console.log(res.data.token))
    .then((res)=>settoken(res.data.token))
    
    .catch((err)=>console.log(err));
  }
  // console.log(token)
  const value = {
    handleLogin,
    token,
    settoken
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
