import {
    LOAD_ARTICLES, 
    GET_ARTICLES_SUCCES,
    SORTED_ARTICLES
} from "../types";

const initialState = {
    articles: [],
    loading: true,
}

export default function(state= initialState, action){
    switch(action.type){
        case LOAD_ARTICLES:
            return{
                ...state,
                loading: true
            }
        case GET_ARTICLES_SUCCES:
            return{
                ...state,
                loading: false,
                articles:action.payload
            }
        default:
            return state;
    }
}