import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from "@mui/material/Skeleton";

// import "../article.css";
const PostResult = ({posts, loading}) => {
    return (
        <ul className="articles">
        {(loading ? Array.from(new Array(8)) : posts)
        .map((article, i) => (
            <li className="article" key={i}>
                {article 
                ?   <div className="articles-image-box">
                        <LazyLoadImage 
                            src={article.image}
                            width={'100%'} height={'100%'}
                            alt={article.title}
                            placeholder={<Skeleton variant="rectangular" width="100%" height={300} />}
                            />
                    </div>
                :   <div className="articles-image-box">
                        <Skeleton variant="rectangular" width="100%" height={300} />
                    </div>
                }
                {article 
                ?   <>
                        <p className="article-date">{article.author}</p>
                        <p className="article-headline">{article.title}</p>
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