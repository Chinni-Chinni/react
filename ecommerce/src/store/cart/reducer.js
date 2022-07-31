import { ADD_TO_CART_ERROR, ADD_TO_CART_ITEM, ADD_TO_CART_LOADING, CLEAR_CART_ITEM, DEC_CART_ITEM, DELETE_CART_ITEM, GET_CART_ITEM, INC_CART_ITEM } from "./actiontype";



const init = {
    loading: false,
    error: false,
    cart: []
}

export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART_ITEM:
            return {
                ...state,
                loading: false,
                error: false,
            }

        case ADD_TO_CART_LOADING:
            return {
                ...state,
                loading: true,
                error: false
            }

        case ADD_TO_CART_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }

        case INC_CART_ITEM:
            return {
                ...state,
                loading: false,
                error: false
            }

        case DEC_CART_ITEM:
            return {
                ...state,
                loading: false,
                error: false,
            }
        case DELETE_CART_ITEM:
            return {
                ...state,
                loading: false,
                error: false,
            }

        case CLEAR_CART_ITEM:
            return init;

        case GET_CART_ITEM:
            return {
                ...state,
                loading: false,
                error: false,
                cart : payload
            }


        default:
            return {
                ...state
            }
    }

}