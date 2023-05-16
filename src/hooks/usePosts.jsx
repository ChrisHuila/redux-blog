import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const usePosts = () => {
    const { post } = useSelector(state => state.checkbox);
    const { firebase } = useSelector(state => state.firebaseReducer);

    const [ posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);

    const getAllPosts = async () => {
        const postFirebase = await firebase.getCollet();
        setPosts(postFirebase)
        setLoading(false)
    }

    useEffect(() => {
        if(!post)
        getAllPosts()
    },[post])

    return{loadingPost: loading, posts}
}

export default usePosts;