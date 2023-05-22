import {combineReducers} from "redux"
import checkboxReducer from "./checkboxReducer"
import postReducer from "./postReducer";
import articlesReducer from "./articlesReducer";
import viewerReducer from "./viewerReducer";

export default combineReducers({
   checkbox :checkboxReducer,
   viewer: viewerReducer,
   postReducer,
   articlesReducer
})