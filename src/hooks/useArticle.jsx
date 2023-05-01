import { useState, useRef, useMemo, useCallback } from "react";
import { searchArticle, showHeadLines } from "../services/article";

const useArticle = (search, check) => {
    const [articles, setArticles] = useState([])
    const previuosSearch = useRef(search)
    const firstArticle = useRef(true)

    const getArticle = useCallback( async (search) => {
            if(previuosSearch.current === search) return

            previuosSearch.current = search;
            const article = await searchArticle({search});
            setArticles(article)
        }
    ,[]) 
   
    const getHeadLines = async () => {
        if(!firstArticle.current) return
        const headLines = await showHeadLines()
        setArticles(headLines)
        firstArticle.current = false
    }
    const sortedArticle = useMemo(() => {
        return check.sort 
        ? [...articles].sort((a, b) => a.title.localeCompare(b.title))
        :articles
    },[check.sort, articles ])
    return{articles: sortedArticle , getArticle, getHeadLines}
}

export default useArticle;