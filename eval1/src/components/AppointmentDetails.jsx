import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from "styled-components"
export default function AppointmentDetails() {
  const itemid = useParams();
  const [details,setdetails] = useState({});
  
  const Appontmentdetails = styled.div`
  width:40%;
  margin:auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align:center;
  margin-top:40px
  `;

const getappoint = () =>{
  fetch(`  http://localhost:3002/appointment/${itemid.id}`)
        .then((res)=>res.json())
        .then((res)=>setdetails(res))
        .catch((err)=>console.log(err))
}
  useEffect(() => {
    getappoint();

  }, [itemid])




console.log(details)

  return (
    <Appontmentdetails>
      <h1>Appointment Details</h1>
          <div>
            <h3>Name : {details.name}</h3>
            <p>Age : {details.age}</p>
            <h4>appointment_details : {details.appointment_details}</h4>
            <p>Date : {details.date}</p>
            <p>Time : {details.time}PM</p>
            <p>Gender : {details.gender}</p>
          </div>
      <Link to="/Appointment"><button>Go To Appointment</button></Link>

    </Appontmentdetails>
  )
}
