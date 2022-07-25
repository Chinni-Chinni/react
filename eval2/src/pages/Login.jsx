import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loginerror, loginloding, loginsucess } from "../store/action";
import { Link } from "react-router-dom";
export default function Login() {
    const token = useSelector(state => state.token)
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


const dispatch = useDispatch();
const handleLogin = (body)=>{
dispatch(loginloding())
    axios({
        method : "post",
        url : "https://reqres.in/api/login",
        data : body
    })
    .then(res =>{
        dispatch(loginsucess(res.data.token))
    })
    setemail("");
    setpassword("")

    .catch(err =>{
        dispatch(loginerror(err))
    })
}
// const gotohome = ()=>{
//     <Link to = "/">home</Link>
// }


    return (
        <>
        { token ? <div><button>Goto To home</button> </div>:

            <div>
                <h1>Login</h1>
                <Box className='form-input'>

                    <TextField value={email} onChange={(e) => setemail(e.target.value)} label="Filled" variant="filled" />
                    <br />
                    <TextField value={password} onChange={(e) => setpassword(e.target.value)} label="Filled" variant="filled" />
                    <br />

                </Box>
                <button onClick={() => handleLogin({email,password})}>Login</button>
            </div>
}

        </>

    )
}