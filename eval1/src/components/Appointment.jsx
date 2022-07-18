import { ListItem } from '@mui/material';
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../App.css"
import { AuthContext } from '../contents/Authcontext';
import { Navigate } from 'react-router-dom';

export default function Appointment() {
    const [appointment, setappoint] = useState([]);
    const {  token, settoken } = useContext(AuthContext);
const Navigate = useNavigate();

    const fetchData = ()=>{
        axios({
            method: "get",
            url: "http://localhost:3002/appointment"
        })
            .then((res) => setappoint(res.data))
            .catch((err) => console.log(err))

    }

    useEffect(() => {
      fetchData();
    }, [])

    return (
        token ? 
        <div>
            <h1>AppointmentPage</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Appointment Details</th>
                        <th> time</th>
                        <th>date</th>
                        <th>Gender</th>
                        <th>ShowMore</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointment.map((data)=>(
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                <td>{data.appointment_details}</td>
                                <td>{data.time}</td>
                                <td>{data.data}</td>
                                <td>{data.gender}</td>
                                <td>
                                    <Link to = {`/Appointment/${data.id}`}>
                                    ShowMore..</Link>
                                </td>
                                <td><button>delete</button></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>



        </div>
        :<Link to= "/Login">Login</Link>
    )
}
