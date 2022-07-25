import React from 'react'
import { useState } from 'react'
import "../style/Navbar.css"
import {nanoid} from "nanoid";
export default function Subtask({subtask,setsubtask}) {
    const [text ,settext]  = useState("");


    const handlesubmit = ()=>{
        const obj = {
            title :text,
            status : false,
            id : nanoid()
        }
        setsubtask(prev=>(
            [...prev, obj]
            ))
        // setsubtask(obj)
    }
    
    console.log(subtask)

    const handlechange = (id)=>{
        const updatedList = [...subtask].map((el)=>el.id===id ? {...el,status : !el.status} : el);
        setsubtask(updatedList) 

    }
    const handledelete = (id)=>{
        const updatedList = [...subtask].filter((el)=>el.id!==id )
        setsubtask(updatedList) 

    }
  return (

    <>
    <div>
        <input type = "text" value={text} onChange = {(e)=>settext(e.target.value)}></input>
        <button onClick={handlesubmit} >Add</button>
    </div>

    {
        subtask.map((el)=>
        (
            <ul  className = "addingItem" key = {el.id}>
                <input type = "checkbox" checked = {el.status} onChange = {()=>handlechange(el.id)}></input>
                <div>{el.title}</div>
                <button onClick={()=>handledelete( el.id)}>Delete</button>

            </ul>
        ))
    }
    </>
  )
}
