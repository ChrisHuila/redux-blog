import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from "@mui/material/Skeleton";
import postfirebase from "../../../mock/postUpdate.json"
// import "../article.css";
const PostResult = ({posts, loading}) => {

     // Display the current date
     const getTime = (time) => {
        return new Date(time).toLocaleDateString()
    }
    return (
        <ul className="articles">
        {(loading ? Array.from(new Array(8)) : posts)
        .map((post, i) => (
            <li className="article" key={i}>
                {post 
                ?   <div className="articles-image-box">
                        <LazyLoadImage 
                            src={post.image_one}
                            width={'100%'} height={'100%'}
                            alt={post.tittle}
                            placeholder={<Skeleton variant="rectangular" width="100%" height={300} />}
                            />
                    </div>
                :   <div className="articles-image-box">
                        <Skeleton variant="rectangular" width="100%" height={300} />
                    </div>
                }
                {post 
                ?   <>
                        <p className="article-date">{post.author}</p>
                        <p className="article-date">{getTime(post.date)}</p>
                        <p className="article-headline">{post.tittle}</p>
                    </>
                :  
                    <>
                        <Skeleton width="60%" />
                        <Skeleton />
                    </>
                }
            </li>
            ))}
        </ul>
      );
}
 
export default PostResult;