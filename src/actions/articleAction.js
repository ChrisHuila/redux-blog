import {
    LOAD_ARTICLES, 
    GET_ARTICLES_SUCCES,
    SORTED_ARTICLES
} from "../types";

export function loadArticlesAction() {
    return (dispatch) => {
        dispatch(loadArticles())
    }
}
const loadArticles = () => ({
    type:LOAD_ARTICLES
})

export function getArticlesAction(articles){
    return (dispatch) => {
        dispatch(downloadArticlesSucces(articles))
    }
}

const downloadArticlesSucces = (articles) => ({
    type: GET_ARTICLES_SUCCES,
    payload: articles
})
