import {  useMemo, useRef, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPostsAction, loadPostsAction, sortedpostsAction } from "../actions/postAction";

const usePosts = ({sort, search}) => {
    const dispatch = useDispatch()
    const previousSearch = useRef(search)

    const { post } = useSelector(state => state.checkbox);
    const { firebase, posts } = useSelector(state => state.postReducer);
    
    const addPosts =  firePosts =>  dispatch(getPostsAction(firePosts))
    const postsSorted = (sortedposts) => dispatch(sortedpostsAction(sortedposts))

    const getPosts = useCallback( async (search) => {

            //if the current search query is the same as the previous one return  
            if(previousSearch.current === search && search === " ") return

            // Enable only when news is checked
            if(!post) return
            previousSearch.current = search;

            // retorna cargando a true
            loadPostsAction()
            const firePosts = await firebase.getColletBy(search);
            // agrega los posts
            addPosts(firePosts)
        }
    ,[post]) 

    const getAllPosts =  async () => {
        loadPostsAction()
        const postFirebase = await firebase.getCollet();
        addPosts(postFirebase)
    }

    // sort by title
    const sortedposts = useMemo(() => {
    return sort 
    ? [...posts].sort((a, b) => a.title.localeCompare(b.title))
    :posts
    },[sort, posts ])

    useEffect(() => {
        postsSorted(sortedposts)
    }, [sortedposts])

    return{getPosts, getAllPosts}
}

export default usePosts;