import firebase from "../firebase/firebase";
import {
    LOAD_POSTS, 
    GET_ALLPOSTS,
    GET_POST_SUCCES,
    SORTED_POSTS
} from "../types";

const initialState = {
    firebase,
    posts: [],
    loading: true,
    sortedposts:[],
    allposts:[]
}

export default function(state= initialState, action){
    switch(action.type){
        case LOAD_POSTS:
            return{
                ...state,
                loading: true,
            }
        case GET_ALLPOSTS:
            return{
                ...state,
                loading: false,
                allposts: action.payload
            }
        case GET_POST_SUCCES:
            return{
                ...state,
                posts: action.payload,
                loading: false
            }
        case SORTED_POSTS:
            return{
                ...state,
                sortedposts: action.payload
            }
        default:
            return state;
    }
}