import questionMarkImage from "../../assets/img/question-mark.jpg";
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
            article
            ? <li className="article" key={article.id}>
                <div className="articles-image-box">
                    <a href={article.url} target="_blank">
                        <img src={article.image? article.image :questionMarkImage} alt={article.title} />
                    </a>
                </div>
                <p className="article-date">{getTime(article.publishedAt)}</p>
                <p className="article-headline">{article.title}</p>
            </li>
            : (
                <li className="article" key={i}>
                <div className="articles-image-box">
                    <Skeleton variant="rectangular" width="100%" height={300} />
                </div>
                <Skeleton width="60%" />
                <Skeleton />
            </li>
              )
        ))
        }
    </ul>
    )
}
export default ArticlesResult;