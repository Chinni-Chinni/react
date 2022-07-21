// import {createStore} from "redux";
import { legacy_createStore as createStore } from "redux";
import {reducer as Todolistreducer} from "../TodoList/reducer";
import {reducer as countreducer} from "../count/reducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    todo : Todolistreducer,
    counter : countreducer
})
export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());