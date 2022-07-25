import {legacy_createStore as createStore} from "redux";
import { reducer } from "./reducer";
import { CombineReducers } from "redux";
// import { create } from "@mui/material/styles/createTransitions";


// const rootreducer = CombineReducers({
//     reducer
// })

export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())