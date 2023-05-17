import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { useSelector } from "react-redux";


const usePosts = ({sort, search}) => {
    const { post } = useSelector(state => state.checkbox);
    const { firebase } = useSelector(state => state.postReducer);

    const [ posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);
    
    const previousSearch = useRef(search)

    const getPosts = useCallback( async (search) => {

            //if the current search query is the same as the previous one return  
            if(previousSearch.current === search && search === " ") return

            // Enable only when news is checked
            if(!post) return
            previousSearch.current = search;

            const firePosts = await firebase.getColletBy(search);

            setPosts(firePosts)
            setLoading(false)
        }
    ,[post]) 

    const getAllPosts = async () => {
        const postFirebase = await firebase.getCollet();
        setPosts(postFirebase)
        setLoading(false)
    }
    // sort by title
    const sortedposts = useMemo(() => {
    return sort 
    ? [...posts].sort((a, b) => a.title.localeCompare(b.title))
    :posts
    },[sort, posts ])

    useEffect(() => {
        if(!post)
        getAllPosts()
    },[post])

    return{loadingPost: loading, posts: sortedposts, getPosts}
}

export default usePosts;