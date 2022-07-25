import React from 'react'
import { useState } from 'react';
import {useDispatch} from "react-redux";
import axios from "axios"
import { feeduserdetails, feeduserdetailsError, loginerror, loginloading, loginsucess } from '../store/login/action';
import {useSelector} from "react-redux";
import { Navigate } from "react-router-dom";
import {Link} from "react-router-dom"
const intialstate = {
  password: "",
  username: "",
 
}
export default function Login() {
  const [logindata, setlogindata] = useState(intialstate);
  const dispatch = useDispatch();
const token = useSelector(state => state. loginreducer.token)
console.log(token)
  const handlechange = (e) => {
      const { name, value } = e.target;
      // console.log(name)
      setlogindata(prev => (
          {
              ...prev, [name]: value
          }
      ))
      // console.log(logindata)
  }



  const handlelogin = () => {
      let isvalid = true;
      Object.values(logindata).forEach(el=>{
          if(!el){
              isvalid = false;
          }
      })
      if(!isvalid){
          alert("please fill all the details");
          return 

      }
  dispatch(loginloading());
      axios({
          method : "post",
          url : `https://masai-api-mocker.herokuapp.com/auth/login`,
          data : logindata
      })
      .then(res =>{
      dispatch(loginsucess(res.data.token));
      axios({
        method : "get",
        url : `https://masai-api-mocker.herokuapp.com/user/${logindata.username}`,
        headers : {
            Authorization: `Bearer ${res.data.token}`
        }
    })
    .then((res)=>{
        dispatch(feeduserdetails(res.data))
    })
      .catch((err)=>{
        dispatch(feeduserdetailsError(err))
      })
      setlogindata(intialstate);
      
      })
    
      .catch(err => {
       dispatch(loginerror());
      })
   

  }

  if(token){
    return <Navigate to="/" />
  }
  
  return (
    
      <>
          <div>

              {

                  Object.keys(logindata).map((el) => (
                      <div>
                          <input key={el} onChange={handlechange} name={el} value={logindata[el]} placeholder={el}  ></input>

                      </div>
                  ))
              }
              <button onClick={handlelogin}>Login</button>


          </div>
      </>
  )
}
