import {combineReducers} from "redux"
import checkboxReducer from "./checkboxReducer"
import firebaseReducer from "./firebaseReducer";

export default combineReducers({
   checkbox :checkboxReducer,
   firebaseReducer
})