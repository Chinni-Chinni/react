// import { addtodoloading, deleteerror, deleteloading, deletesucess, gettodoerror, gettodoloading, gettodosuccess, patcherror, patchloading, patchsucess } from '../store/action';

import axios from "axios"
import { ADD_TODO_LOADING, DELETE_TODO_ERROR, DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, PATCH_TODO_ERROR, PATCH_TODO_LOADING, PATCH_TODO_SUCCESS } from "./ActionType"




export const addtodoloading = ()=>{
    return {
        type : ADD_TODO_LOADING
    }
        
}

export const gettodoloading = ()=>{
    return {
        type : GET_TODO_LOADING
    }
        
}

export const gettodoerror= ()=>{
    return {
        type : GET_TODO_ERROR
    }
        
}

export const gettodosuccess = (payload)=>{
    return {
        type : GET_TODO_SUCCESS,
        payload
    }
        
}

export const patchloading = ()=>{
    return {
        type : PATCH_TODO_LOADING
    }
        
}


export const patcherror = ()=>{
    return {
        type : PATCH_TODO_ERROR
    }
        
}

export const patchsucess = ()=>{
    return {
        type : PATCH_TODO_SUCCESS
    }
        
}

export const deleteloading = ()=>{
    return {
        type : DELETE_TODO_LOADING
    }
        
}

export const deleteerror = ()=>{
    return {
        type : DELETE_TODO_ERROR
    }
        
}

export const deletesucess = ()=>{
    return {
        type : DELETE_TODO_SUCCESS
    }
        
}

// GETTING THE DATA
export const getdata = () => (dispatch) => {
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


 // POST THE DATA

 export const addTodo = (text,nanoid,settext) =>(dispatch) => {
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
           dispatch( getdata());
            settext("")
        })
        .catch(err => {
            dispatch(gettodoerror());
        })
}

 // FOR PATCHING THE DATA TO CHANGE THE STATUS

 export const patchdata = (id, status) => (dispatch) => {
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
            dispatch(getdata())
        })
        .catch(err => {
            dispatch(patcherror());
        })
        // console.log(status);
}


// FOR DELETING THE DATA FROM THE TODO AND DB.JSON

export const deletedata = (id) => (dispatch) => {
    dispatch(deleteloading());
    axios({
        method: "delete",
        url: `http://localhost:3001/todos/${id}`,


    })
        .then(res => {
            dispatch(deletesucess())
            dispatch(getdata())
        })
        .catch(err => {
            dispatch(deleteerror());
        })


}
