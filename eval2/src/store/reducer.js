import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actiontype";


const intialstate = {
    login : {
        loading : false,
        error : false,
        token : null
    }
}

export const reducer = (state = intialstate , {type , payload}) => {
    switch (type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loading : true,
                error:false,
            }
            
            case LOGIN_ERROR:
                return {
                    ...state,
                    loading : false,
                    error:true,
                }

                case LOGIN_SUCCESS :
                    return {
                        ...state,
                        loading : false,
                        error :false,
                        token : payload
                    }

                    case LOGOUT_SUCCESS : 
                    return {
                        ...state,
                        loading:false,
                        error:false,
                        token:null
                    }
    
        default:
            return {...state}
    }
}