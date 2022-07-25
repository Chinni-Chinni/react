import React from 'react';
import {Link, Navigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import "../style/Navbar.css";
import axios from 'axios';
import { logout } from '../store/login/action';
export default function Navbar() {
  const token = useSelector(state => state. loginreducer.token);
const dispatch = useDispatch();
  const handleLogout = ()=>{
    return <Navigate to = "/signup"/>
    }
  return (
    <div className='navbar'>
    <Link to = "/">Home</Link>
    {token ? <button onClick={()=>dispatch(logout())}>Logout</button> : 
    <Link to = "/login">Login</Link>
  }
    <Link to = "/signup">SignUp</Link>
    <Link to = "/newtask">Newtask</Link>
    </div>
  )

  
}
