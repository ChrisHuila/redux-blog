import questionMarkImage from "../../../assets/img/question-mark.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from "@mui/material/Skeleton";

import "./article.css";

const ArticlesResult = ({articles, loading}) => {

    // Display the current date
    const getTime = (time) => {
        return new Date(time).toLocaleDateString()
    }

    return(
        <ul className="articles">
        {(loading ? Array.from(new Array(8)) : articles)
        .map((article, i) => (
            <li className="article" key={i}>
                {article 
                ?   <div className="articles-image-box">
                        <a href={article.url} target="_blank">
                            <LazyLoadImage 
                            src={article.image? article.image :questionMarkImage}
                            width={'100%'} height={'100%'}
                            alt={article.title}
                            placeholder={<Skeleton variant="rectangular" width="100%" height={300} />}
                            />
                        </a>
                    </div>
                :   <div className="articles-image-box">
                        <Skeleton variant="rectangular" width="100%" height={300} />
                    </div>
                }
                {article 
                ?   <>  <div className="article-source_div">
                            <p className="article-source">{article.source.name}</p>
                            <p className="article-date">{getTime(article.publishedAt)}</p>
                        </div>

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
    )
}
export default ArticlesResult;