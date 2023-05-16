import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const usePosts = () => {
    const { post } = useSelector(state => state.checkbox);
    const { firebase } = useSelector(state => state.firebaseReducer);

    const [ posts, SetPosts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if(!post) return

        const getPosts = async () => {
            const postFirebase = await firebase.getCollet();
            SetPosts(postFirebase)
            setLoading(false)
        }
        getPosts()
    },[post])

    return{posts, loadingPost: loading}
}

export default usePosts;