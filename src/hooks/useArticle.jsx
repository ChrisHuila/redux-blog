import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { searchArticle, showHeadLines } from "../services/article";

import { useDispatch, useSelector} from "react-redux";
import { loadArticlesAction, getArticlesAction, getTotalCountAction, sortedArticlesAction } from "../actions/articleAction";

const useArticle = (search, sort, news, currentpage) => {
    
    const previousSearch = useRef(search)
    const previousPage = useRef(currentpage);
    const firstArticle = useRef(true)
    
    const dispatch = useDispatch()
    
    const [errorfetch, setErrorFetch] = useState(false);
    const {articles} = useSelector(state => state.articlesReducer)

    const loadArticles = () => dispatch(loadArticlesAction())
    const addArticles = (articles) => dispatch(getArticlesAction(articles))

    const getArticle = useCallback( async (search, currentpage) => {

            //if the current search query is the same as the previous one return  
            if(previousSearch.current === search && previousPage.current === currentpage && search === " ") return

            // Enable only when news is checked
            if(!news) return
            previousSearch.current = search;
            previousPage.current = currentpage;

            // set loading as true
            loadArticles()
            const [totalCount, article, ok] = await searchArticle({search, currentpage});
            addArticles(article)
            // Set total counts
            dispatch(getTotalCountAction(totalCount))
            setErrorFetch(!ok);
        }
    ,[news, currentpage]) 
   
    const getHeadLines = async () => {

        if(!firstArticle.current) return

        loadArticles()
        const [headLines, ok] = await showHeadLines()

        addArticles(headLines)
        setErrorFetch(!ok);
        firstArticle.current = false
    }

    // sort by title
    const sortedArticle = useMemo(() => {
        return sort 
        ? [...articles].sort((a, b) => a.title.localeCompare(b.title))
        :articles
    },[sort, articles ])

    // Every time a change in pagination occurs, fire that.
    useEffect(() => {
        if(search !== ''){
            getArticle(search, currentpage);
            return
        }
        // show the headlines after the page has loaded
        getHeadLines()
    },[currentpage])

    useEffect(() => {
        // Enable the sort
        dispatch(sortedArticlesAction(sortedArticle))
    }, [sortedArticle])
    
    return{ errorfetch,  getArticle}
}

export default useArticle;