import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { searchArticle, showHeadLines } from "../services/article";

const useArticle = (search, sort, news, currentpage) => {
    const [articles, setArticles] = useState([])
    const previousSearch = useRef(search)
    const previousPage = useRef(currentpage);
    const firstArticle = useRef(true)

    const getArticle = useCallback( async (search, currentpage) => {

            //if the current search query is the same as the previous one return  
            if(previousSearch.current === search && previousPage.current === currentpage) return
            console.log(search, currentpage );

            // Enable only when news is checked
            if(!news) return
            previousSearch.current = search;
            previousPage.current = currentpage;
            const article = await searchArticle({search});
            setArticles(article)
        }
    ,[news, currentpage]) 
   
    const getHeadLines = async () => {
        if(!firstArticle.current) return
        const headLines = await showHeadLines()
        setArticles(headLines)
        firstArticle.current = false
    }

    // sort by title
    const sortedArticle = useMemo(() => {
        return sort 
        ? [...articles].sort((a, b) => a.title.localeCompare(b.title))
        :articles
    },[sort, articles ])

    useEffect(() => {
        if(search !== ''){
            getArticle(search, currentpage);
        }
    },[currentpage])

    // show the headlines after the page has loaded
    useEffect(() => {
        getHeadLines()
    }, [])
    
    return{articles: sortedArticle , getArticle}
}

export default useArticle;