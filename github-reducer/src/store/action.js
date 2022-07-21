import { SEARCH_ERROR, SEARCH_LOADING, SEARCH_SUCCESS } from "./actionType"


export const addloading = ()=>{
    return {
        type : SEARCH_LOADING
    }
}

export const adderror = ()=>{
    return {
        type : SEARCH_ERROR
    }
}

export const addsuccess = (payload)=>{
    return {
        type : SEARCH_SUCCESS,
        payload
    }
}