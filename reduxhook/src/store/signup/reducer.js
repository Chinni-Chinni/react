import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./ActionType";

const intialstate = {
    loading: false,
    error: false,
    token: null,
    message: ""

}

export const reducer = (state = intialstate, { type, payload }) => {

    switch (type) {
        case SIGNUP_LOADING:
            return {
                ...state,
                loading: true,
                error : false
            }

        case SIGNUP_ERROR:
            return {
                ...state,
                loading: false,
                error : true,
            }
            case SIGNUP_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error : false
                }

        default:
            return {
                ...state,
            }
    }
}