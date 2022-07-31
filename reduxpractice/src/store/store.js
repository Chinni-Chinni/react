// import {createStore} from "redux";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import {reducer as Todolistreducer} from "../TodoList/reducer";
import {reducer as countreducer} from "../count/reducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    todo : Todolistreducer,
    counter : countreducer
})

export const store = createStore(rootReducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));