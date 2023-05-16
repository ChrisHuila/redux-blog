import NoArticlesResult from "../NoArticlesResult";
import PostResult from "./PostResult";

const Post = ({posts, loading}) => {
    const hasPost = posts?.length > 0;
    return (
        !hasPost & !loading
            ? <NoArticlesResult />
            : <PostResult 
            posts={posts}
            loading={loading}
            />
      )
}
 
export default Post;