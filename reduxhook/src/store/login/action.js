import { FEED_USER_DETAILS, FEED_USER_DETAILS_ERROR, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./actiontype"

export const loginloading = ()=>{
    return {
        type : LOGIN_LOADING,
    }
}
export const loginerror = ()=>
{
    return {
        type :LOGIN_ERROR,
    }
}

export const loginsucess = (payload)=>{
    return {
        type : LOGIN_SUCCESS,
        payload
    
    }
}
export const logout = () =>{
    return {
        type : LOGOUT
    }
}

export const feeduserdetails = (payload)=>{
    return {
        type : FEED_USER_DETAILS,
        payload
    }
}

export const feeduserdetailsError = ()=>{
    return{
        type : FEED_USER_DETAILS_ERROR
    }
}