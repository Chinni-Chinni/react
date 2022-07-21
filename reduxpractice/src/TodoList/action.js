// import { addtodoloading, deleteerror, deleteloading, deletesucess, gettodoerror, gettodoloading, gettodosuccess, patcherror, patchloading, patchsucess } from '../store/action';

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