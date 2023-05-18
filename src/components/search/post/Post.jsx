import NoArticlesResult from "../articles/NoArticlesResult";
import PostResult from "./PostResult";

import { useSelector } from "react-redux";
const Post = () => {
    const { sortedposts, loading} = useSelector(state => state.postReducer)

    const hasPost = sortedposts?.length > 0;
    return (
        !hasPost & !loading
            ? <NoArticlesResult />
            : <PostResult 
            posts={sortedposts}
            loading={loading}
            />
      )
}
 
export default Post;