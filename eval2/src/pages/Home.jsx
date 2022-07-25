import { Button } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import Blogs from './Blogs';
import { Link, Navigate } from "react-router-dom";
export default function Home() {
    const token = useSelector(state => state.token);

    // console.log(token)
    const movetolisting = ()=>{
        return 
        {
            <Navigate to = "/blog" />
        }
    }
  return (
    
    <div>
       <Link to = "/blog"><Button>Go to Blogs Listing</Button></Link> 
    </div>
  )
}
