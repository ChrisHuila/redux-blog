import {combineReducers} from "redux"
import checkboxReducer from "./checkboxReducer"

export default combineReducers({
   checkbox :checkboxReducer,
})