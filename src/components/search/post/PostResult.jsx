import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from "@mui/material/Skeleton";

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
                        <Link to={`post/${post.id}`}>
                            <LazyLoadImage 
                                src={post.image_one}
                                width={'100%'} height={'100%'}
                                alt={post.tittle}
                                placeholder={<Skeleton variant="rectangular" width="100%" height={300} />}
                                />
                        </Link>
                    </div>
                :   <div className="articles-image-box">
                        <Skeleton variant="rectangular" width="100%" height={300} />
                    </div>
                }
                {post 
                ?   <>
                        <div className="article-source_div">
                            <p className="article-source">{post.tagline}</p>
                            <p className="article-date">{getTime(post.date)}</p>
                        </div>
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