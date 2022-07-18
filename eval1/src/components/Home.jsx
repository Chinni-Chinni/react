import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contents/Authcontext';

export default function Home() {
  const { token, settoken } = useContext(AuthContext);
  return (
  
    <div>
      {token?
     <Link to="/Appointment"><button>Show the Appointment</button></Link> 
     :
     <Link to="/Login">Plase Login to the Appointments</Link>
      }

    </div>
  )
}
