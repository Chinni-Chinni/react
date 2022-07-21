import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { nanoid } from "nanoid"
import { useDispatch, useSelector } from 'react-redux';
import { addtodoloading, deleteerror, deleteloading, deletesucess, gettodoerror, gettodoloading, gettodosuccess, patcherror, patchloading, patchsucess } from '../TodoList/action';
export default function TodoList() {
    const [text, settext] = useState("");

    const dispatch = useDispatch();

    const { loading, error, data } = useSelector(state => state.todo.todos);
    // console.log(data,"data")

// GETTING THE DATA
    const getdata = () => {
        dispatch(gettodoloading())
        axios({
            method: "get",
            url: "http://localhost:3001/todos"
        })
            .then(res => {
                dispatch(gettodosuccess(res.data))
            })
            .catch(err => {
                dispatch(gettodoerror())
            })
    }

    useEffect(() => {
        getdata();
    }, [nanoid])

    // POST THE DATA

    const handleAddTodo = () => {
        dispatch(addtodoloading());
        axios({
            method: "post",
            url: "http://localhost:3001/todos",
            data: {
                title: text,
                status: false,
                id: nanoid
            }

        })
            .then(res => {
                dispatch(gettodosuccess())
                getdata()
            })
            .catch(err => {
                dispatch(gettodoerror());
            })
    }
// FOR DELETING THE DATA FROM THE TODO AND DB.JSON

    const handleDelete = (id) => {
        dispatch(deleteloading());
        axios({
            method: "delete",
            url: `http://localhost:3001/todos/${id}`,


        })
            .then(res => {
                dispatch(deletesucess())
                getdata()
            })
            .catch(err => {
                dispatch(deleteerror());
            })


    }
    // FOR PATCHING THE DATA TO CHANGE THE STATUS

    const handleTaggle = (id, status) => {
        dispatch(patchloading());
        axios({
            method: "patch",
            url: `http://localhost:3001/todos/${id}`,
            data: {
                status : !status
            }

        })
            .then(res => {
                dispatch(patchsucess())
                getdata()
            })
            .catch(err => {
                dispatch(patcherror());
            })
            // console.log(status);
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
