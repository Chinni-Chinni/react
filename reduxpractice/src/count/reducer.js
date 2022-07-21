import { ADD_COUNT, DEC_COUNT } from "./actionType"


const intialState = {
    count : 0
}

export const reducer = (state = intialState, action) => {

switch (action.type) {
    case ADD_COUNT:
        return {
            ...state,
            count: state.count + action.payload
        }
    case DEC_COUNT:
        return {
            ...state,
            count: state.count - action.payload
        }
    
    default:
        return {
            ...state
        }
    }
}