import { 
    SHOW_NEWS,
    SHOW_POST
} from "../types"

const initialState = {
    news: true,
    post: false
}

export default function(state= initialState , action){
    switch(action.type){
        case SHOW_POST:
            return{
                ...state,
                post: true,
                news: false
            }
        case SHOW_NEWS: 
            return{
                ...state,
                post: false,
                news: true
            }
        default:
            return state;
    }
}