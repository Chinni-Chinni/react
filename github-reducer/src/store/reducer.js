import { SEARCH_ERROR, SEARCH_LOADING, SEARCH_SUCCESS } from "./actionType";

const intialstate = {
    todos :{
    loading : false,
    error : false,
    data : []
    }
}

export const reducer = (state=intialstate , {type,payload})=>{

    switch (type) {
        case SEARCH_LOADING:
            return {
                ...state,
                todos : {
                    ...state.todos,
                loading : true,
                error : false
                }

            }

        case SEARCH_ERROR : 
        return {

            ...state,
            todos :{
                ...state.todos,

                error : true,
                loading : false
            }
        }

        case SEARCH_SUCCESS : 
        return {
            ...state,
            todos : {
                ...state.todos,
                error : false,
                loading : false,
                data : payload
            }
            
        }

            
            
    
        default:
            return {
                ...state
            }
    }
}