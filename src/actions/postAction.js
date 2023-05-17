import {
    LOAD_POSTS, 
    GET_POST_SUCCES,
    SORTED_POSTS
} from "../types";

export function loadPostsAction() {
    return (dispatch) => {
        dispatch(loadPosts())
    }
}
const loadPosts = () => ({
    type:LOAD_POSTS
})

export function getPostsAction(posts){
    return (dispatch) => {
        dispatch(downloadPostsSucces(posts))
    }
}

const downloadPostsSucces = (posts) => ({
    type: GET_POST_SUCCES,
    payload: posts
})

export function sortedpostsAction(posts){
    return (dispatch) => {
        dispatch(sortedPosts(posts))
    }
}
const sortedPosts = posts => ({
    type:SORTED_POSTS,
    payload: posts
})