import Views from "../components/viewers/Views";
import { useParams } from "react-router-dom";

const PostPage = () => {
    const {id} = useParams();

    return (
        <>
            <h2>Post</h2>
            <Views 
            id={id}
            />
        </>
    );
}
 
export default PostPage;