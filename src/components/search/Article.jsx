import ArticlesResult from "./ArticlesResult"
import NoArticlesResult from "./NoArticlesResult"

const Article = ({articles, loading, errorfetch}) => {

    const hasArticle = articles?.length > 0;
    if(errorfetch) return null; 
    return (
        !hasArticle & !loading
            ? <NoArticlesResult />
            : <ArticlesResult 
            articles={articles}
            loading={loading}
            />
      )
}
 
export default Article;