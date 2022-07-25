import {  SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./ActionType"


export const signuploading = ()=>{
    return {
        type : SIGNUP_LOADING,
    }
}
export const signuperror = ()=>
{
    return {
        type :SIGNUP_ERROR,
    }
}

export const signupesucess = ()=>{
    return {
        type : SIGNUP_SUCCESS,
    
    }
}

