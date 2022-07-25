import { reducer as signupReducer } from "./signup/reducer";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import {reducer as loginReducer} from "./login/reducer";
import {combineReducers} from "redux";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    signreducer : signupReducer,
    loginreducer : loginReducer
})

export const store = createStore(rootReducer , 
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))