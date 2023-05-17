import {combineReducers} from "redux"
import checkboxReducer from "./checkboxReducer"
import postReducer from "./postReducer";

export default combineReducers({
   checkbox :checkboxReducer,
   postReducer
})