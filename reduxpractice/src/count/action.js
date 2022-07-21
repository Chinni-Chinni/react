import { ADD_COUNT, DEC_COUNT } from "./actionType"

export const add_count = (payload)=>{
    return {
        type : ADD_COUNT,
        payload
    }
        
}

export const dec_count = (payload)=>{
    return {
        type : DEC_COUNT,
        payload
    }
        
}