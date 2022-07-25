import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actiontype"


export const loginloding = () => {
    return {
        type: LOGIN_LOADING
    }
}

export const loginerror = () => {
    return {
        type: LOGIN_ERROR
    }
}
export const loginsucess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}