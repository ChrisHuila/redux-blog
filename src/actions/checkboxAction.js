import { 
    SHOW_NEWS,
    SHOW_POST
} from "../types";

export function showPost(){
    return (dispatch) => {
        dispatch(enablePost())
    }
}

const enablePost = () => ({
    type: SHOW_POST
})

export function showNews(){
    return(dispatch) => {
        dispatch(enableNews())
    }
}

const enableNews = () => ({
    type: SHOW_NEWS
})