import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { AuthContext } from '../contents/Authcontext';
import Appointment from './Appointment';
import "../App.css"
// import ShowUserDetails from './ShowUserDetails';

export default function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const { handleLogin, token, settoken } = useContext(AuthContext);
    // console.log(token.token);

    const handleAuth = (details) => {
        token ? settoken(null) : handleLogin(details);


    }
    return (
        <>
            {token ? <h2>user Logged In</h2> :
                <div>
                    <h1>Login</h1>
                    <Box className='form-input'>

                        <TextField value={email} onChange={(e) => setemail(e.target.value)} label="Filled" variant="filled" />
                        <TextField value={password} onChange={(e) => setpassword(e.target.value)} label="Filled" variant="filled" />

                    </Box>



                </div>}
            <Button onClick={() => handleAuth({ email, password })} variant="contained" color="success"> {token ? "Log out" : "Log in"}</Button>
        < Appointment />

        </>

    )
}
