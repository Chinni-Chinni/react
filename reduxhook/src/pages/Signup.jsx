import React from 'react'
import { useState } from 'react'
import axios from "axios"; 
import {useDispatch} from "react-redux";
import { signuperror, signupesucess, signuploading } from '../store/signup/action';
import {useSelector} from "react-redux"
import { Navigate } from 'react-router-dom';

const intialstate = {
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: ""
}

export default function Signup() {
    const [signupdata, setsignupdata] = useState(intialstate);
    const dispatch = useDispatch();
    const token = useSelector(state => state. loginreducer.token)

    const handlechange = (e) => {
        const { name, value } = e.target;
        console.log(name)
        setsignupdata(prev => (
            {
                ...prev, [name]: value
            }
        ))
        // console.log(signupdata)
    }


    const handleRegister = () => {
        let isvalid = true;
        Object.values(signupdata).forEach(el=>{
            if(!el){
                isvalid = false;
            }
        })
        if(!isvalid){
            alert("please fill all the details");
            return 

        }
    dispatch(signuploading());
        axios({
            method : "post",
            url : `https://masai-api-mocker.herokuapp.com/auth/register`,
            data : signupdata
        })
        .then(res =>{
        dispatch(signupesucess());
        setsignupdata(intialstate);
        })
        .catch(err => {
         dispatch(signuperror());
        })
    }
<Navigate to = "/login" />

    
    return (
        <>
            <div>

                {

                    Object.keys(signupdata).map((el) => (
                        <div>
                            <input key={el} onChange={handlechange} name={el} value={signupdata[el]} placeholder={el}  ></input>

                        </div>
                    ))
                }
                <button onClick={handleRegister}>Register</button>


            </div>
        </>
    )
}

// 

/*
{
  "name": "MASAI School",
  "email": "hello@masai.com"
  "password": "secret",
  "username": "masai-school",
  "mobile": "9876543210",
  "description": "A Transformation in education!" 
}
*/