import {combineReducers} from "redux";
import { Productreducer } from "./Productreducer";


const reducers = combineReducers({
 allProducts : Productreducer,
})

export default reducers;