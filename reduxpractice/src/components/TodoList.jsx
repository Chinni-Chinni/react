import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { nanoid } from "nanoid"
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, addtodoloading, deletedata, deleteerror, deleteloading, deletesucess, getdata, gettodoerror, gettodoloading, gettodosuccess, handleAddTodo, patchdata, patcherror, patchloading, patchsucess } from '../TodoList/action';
export default function TodoList() {
    const [text, settext] = useState("");

    const dispatch = useDispatch();

    const { loading, error, data } = useSelector(state => state.todo.todos);
    // console.log(data,"data")


// for getting the data

    useEffect(() => {
        dispatch(getdata());
    }, [nanoid])


//  for adding the data
   const handleAddTodo  = ()=>{
    dispatch(addTodo(text,nanoid,settext))
   }

// for taggling the data
   const handleTaggle = (id,status)=>{
    dispatch(patchdata(id, status))
   }

// for deleting the data
   const handleDelete = (id)=>{
    dispatch(deletedata(id))
   }
   

    return (
        <>
            <div>

                <input type="text" value={text} onChange={(e) => settext(e.target.value)} placeholder="add someting"></input>
                <button onClick={handleAddTodo}> ADD </button>


            </div>
            {
                loading ? <div>...loading</div> :
                    error ? <div>..something went wrong</div> :
                        data.map((res) => (
                            <div>
                                <li key={res.id}> {res.title}</li>
                                <button onClick={() => handleDelete(res.id)}>Delete</button>
                                <button onClick={() => handleTaggle(res.id, res.status)}>{res.status ? "Done" : "NotDone"} </button>
                            </div>
                        ))

            }


        </>
    )
}
