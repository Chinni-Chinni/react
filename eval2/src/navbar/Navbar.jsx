import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import { logout } from '../store/action';

export default function Navbar() {
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();
  return (
    
    <div>
        <div>
          { token ?<button onClick = {()=>dispatch(logout())}>Logout</button> :<Link to = "/login">Login</Link>}
            <Link to = "/" > Home</Link>
            </div>
    </div>
  )
}
