import { useState, useCallback, useEffect } from "react";
import debounce from "just-debounce-it";
import Article from "../components/search/Article";
import useArticle from "../hooks/useArticle";
import useSearch from "../hooks/useSearch";
import "../../css/searchpage.css";



const SearchPage = () => {
    const [check, setCheck] = useState({
        sort: false,
        post: false,
        news: true,
    })
    const {sort, post, news} = check
    // Custom hook
    const {search, setSearch, error} = useSearch();
    const {articles, getArticle, getHeadLines} = useArticle(search, check)

    // show the headlines after the page has loaded
    useEffect(() => {
        getHeadLines()
    }, [])

    // only perform the search when getArticle change
    const debaunceGetArticle = useCallback(
        debounce(search =>{
            getArticle(search)
        },500),
    [getArticle])  

    // perform the search
    const handleChange = e => {
        const newSearch = e.target.value;
        setSearch(newSearch)
        debaunceGetArticle(newSearch)
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        getArticle(search)

    }
    //TODO enable search for either news or post
    const handleCheck = e => {
        setCheck({
            ...check,
            [e.target.name]: !check[e.target.name]
        })
    }
    
    return ( 
        <>
            <main className="container">
                <form action="" className="search-form" onSubmit={handleSubmit}>
                    <div className="search-form_container">
                        <div className="search-div_query">
                            <input  type="text" value={search} name="query" onChange={handleChange} className="search-input" placeholder="What are you looking for?" />
                            <button  type="submit" className="search-button"> <i className="bi bi-search"></i></button>
                        </div>
                        <div className="search-div_checkbox">
                            <input type="checkbox" name="news" checked={news} onChange={handleCheck} id="news"/>
                            <label htmlFor="news">News</label>

                            <input type="checkbox" name="post" checked={post} onChange={handleCheck} id="post"/>
                            <label htmlFor="post">Post</label>

                            <input type="checkbox" name="sort" onChange={handleCheck} checked={sort} id="sort"/>
                            <label htmlFor="sort">Sort by name</label>
                        </div>
                    </div>
                </form>
                {error && <p style={{color: 'red'}}>{error}</p>}
               <Article articles={articles}/>
            </main>
        </>
    );
}
 
export default SearchPage;