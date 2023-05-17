import {combineReducers} from "redux"
import checkboxReducer from "./checkboxReducer"
import postReducer from "./postReducer";
import articlesReducer from "./articlesReducer";

export default combineReducers({
   checkbox :checkboxReducer,
   postReducer,
   articlesReducer
})