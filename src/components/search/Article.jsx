import questionMarkImage from "../../assets/img/question-mark.jpg";
import "../../../css/article.css";

const ArticlesResult = ({articles}) => {
    // Display the current date
    const getTime = (time) => {
        return new Date(time).toLocaleDateString()
    }
    
    return(
        <ul className="articles">
        {
        articles.map(article => (
            <li className="article" key={article.id}>
                <div className="articles-image-box">
                    <a href={article.url} target="_blank">
                        <img src={article.image? article.image :questionMarkImage} alt={article.title} />
                    </a>
                </div>
                <h6>{getTime(article.publishedAt)}</h6>
                <h6>{article.title}</h6>
            </li>
        ))
        }
    </ul>
    )
}

const NoArticlesResult = () => {
    return(
        <p>no results were found</p>
    )
}

const Article = ({articles}) => {
    const hasArticle = articles?.length > 0

    return (
        hasArticle
            ? <ArticlesResult articles={articles}/>
            : <NoArticlesResult />
      )
}
 
export default Article;