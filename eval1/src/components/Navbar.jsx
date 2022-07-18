import React from "react";
import styled from "styled-components";
import {Link} from  "react-router-dom";

const NavbarWrapper = styled.div`
width:80%;
margin:auto;
display : flex;
justify-content:space-evenly;
background-color : pink;
padding:10px;
text-decoration-line : none;
margin-top : 40px;
`;

const Navbar = ()=>{
  return (

    <NavbarWrapper>
  
  <Link to = "/">Home</Link>
  <Link to = "/Login">Login</Link>
  <Link to = "./Appointment">Appointment</Link>
  {/* <Link to = "./">Login</Link>
  <Link to = "./">Product</Link> */}
  
</NavbarWrapper>
  )
}
export {Navbar};