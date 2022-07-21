import { ADD_COUNT, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DEC_COUNT, DELETE_TODO_ERROR, DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, PATCH_TODO_ERROR, PATCH_TODO_LOADING, PATCH_TODO_SUCCESS } from "./ActionType";

const intialState = {
    todos: {
        loading: false,
        error: false,
        data: []
    }
}

export const reducer = (state = intialState, action) => {
    switch (action.type) {
        // FOR ADDING THE TODOS
        case ADD_TODO_LOADING:

            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: true,
                    error: false,
                }
            }

        case ADD_TODO_ERROR:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    error: true,
                }
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    error: false,
                    // data : action.payload             
                }
            }

        // FOR GETTING THE TODOS

        case GET_TODO_LOADING:

            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: true,
                    error: false,
                }
            }

        case GET_TODO_ERROR:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    error: true,
                }
            }
        case GET_TODO_SUCCESS:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    error: false,
                    data: action.payload
                }
            }
        // FOR THE DELETING TODO

        case DELETE_TODO_LOADING:

            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: true,
                    error: false,
                }
            }

        case DELETE_TODO_ERROR:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    error: true,
                }
            }
        case DELETE_TODO_SUCCESS:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    error: false,
                    // data: action.payload
                }
            }
        // patch the data
        case PATCH_TODO_LOADING:

            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: true,
                    error: false,
                }
            }

        case PATCH_TODO_ERROR:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    error: true,
                }
            }
        case PATCH_TODO_SUCCESS:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    error: false,
                    data: action.payload
                }
            }


        default:
            return {
                ...state
            }
    }
}