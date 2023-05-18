import {
    LOAD_ARTICLES, 
    GET_ARTICLES_SUCCES,
    ARTICLES_TOTAL_COUNTS,
    SORTED_ARTICLES
} from "../types";

const initialState = {
    articles: [],
    loading: true,
    totalCount: 1,
    sortedarticles: []
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
        case ARTICLES_TOTAL_COUNTS:
            return{
                ...state,
                totalCount: action.payload
            }
        case SORTED_ARTICLES:
            return{
                ...state,
                sortedarticles: action.payload 
            }
        default:
            return state;
    }
}