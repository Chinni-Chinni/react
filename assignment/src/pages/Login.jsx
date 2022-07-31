import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../App.css"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const [email, setmail] = useState("");
  const [password, setpassword] = useState("");
  const { token, handleLogin, settoken } = useContext(AuthContext);

  const handleAuth = (details) => {
    token ? settoken(null) : handleLogin(details);
  }

  // console.log(token);
  return (


    <div className="form-items">
      {token ? <h2>user logged in</h2> :
        <>
          <h2>Login</h2>
          <Box style={{ display: "flex", flexDirection: "column", padding: "10px", border: "1px solid gray" }}>
            <TextField value={email} onChange={(e) => setmail(e.target.value)} label="email" variant="filled" /><br />
            <TextField value={password} onChange={(e) => setpassword(e.target.value)} label="password" variant="filled" /><br />


          </Box>
        </>
      }

      <Button onClick={() => handleAuth({ email, password })} variant="contained" color="success">
        {token ? "Logout" : "LogIn"}
      </Button>

    </div>

  )
};

export default Login;
