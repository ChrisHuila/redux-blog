import {
    LOAD_ARTICLES, 
    GET_ARTICLES_SUCCES,
    ARTICLES_TOTAL_COUNTS,
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

export function getTotalCountAction(count) {
    return (dispatch) => {
        dispatch(getTotalCount(count))
    }
}
const getTotalCount = (count) => ({
    type: ARTICLES_TOTAL_COUNTS,
    payload: count
})