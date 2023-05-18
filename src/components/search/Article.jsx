import ArticlesResult from "./ArticlesResult"
import NoArticlesResult from "./NoArticlesResult"

import { useSelector } from "react-redux";

const Article = ({ errorfetch}) => {
    const { sortedarticles: articles, loading } = useSelector(state => state.articlesReducer);
    
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