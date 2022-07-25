import React from 'react'
import { useSelector } from 'react-redux';
import "../style/Navbar.css"

export default function Profile() {
    const userdetails = useSelector(state => state. loginreducer.userdetails);
    //  console.log(userdetails);
const token = useSelector(state => state. loginreducer.token)

  return (
    token ? 
    <>
    <div className='userdetails'>
        <div style={{backgroundColor : 'lightpink'}}>

        <h3>UserName : {userdetails.name}</h3>
        <p>UserDesription : {userdetails.description}</p>
        <p>UserMail : {userdetails.email}</p>
        <p>userMobile : {userdetails.mobile}</p>
        </div>
    </div>
    
    
    
    
    </>:null
  )
}
