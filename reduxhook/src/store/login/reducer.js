import { FEED_USER_DETAILS, FEED_USER_DETAILS_ERROR, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./actiontype"

const intialstate = {
    loading: false,
    error: false,
    token: null,
    userdetails: {}

}

export const reducer = (state = intialstate, { type, payload }) => {
    // console.log(payload)
    switch (type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loading: true,
                error: false
            }

        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                token: payload
            }
        case LOGOUT:
            return {
                ...intialstate
            }
        case FEED_USER_DETAILS:
            return {
                ...state,
                userdetails: payload,
                error:false,
                loading:false

            }
            case FEED_USER_DETAILS_ERROR :
                return {
                    ...state,
                    error : false,
                    loading : false
                }

        default:
            return {
                ...state
            }
    }
}