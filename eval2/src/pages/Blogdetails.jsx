import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import "../style/All.css"

export default function Blogdetails() {
    const id = useParams();
    // console.log(id.id)
    const [details,setdetails] = useState({});
    const getdeatils = ()=>{
        fetch(`http://localhost:3002/blogs/${id.id}`)
        .then((res)=>res.json())
        .then((res)=>setdetails(res))
        .catch((err)=>console.log(err))

    }
    useEffect(()=>{
        getdeatils()
    },[id.id]);

    // console.log(details)
  return (
    <div>
        <div className = "blogdetails">
            <div>Title : {details.title}</div>
            <h3> Autor : {details.author}</h3>
            <p>Content : {details.content}</p>
            <div> Publicaiton: {details.publication}</div>
            <p> Published_on{details.published_on}</p>
            <Link to = "/blog"><Button>GoTo Listing Page</Button></Link>
        </div>
    </div>
  )
}
