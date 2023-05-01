import { useState, useCallback, useEffect } from "react";
import debounce from "just-debounce-it";
import Header from "../components/layout/Header";
import Article from "../components/search/Article";
import useArticle from "../hooks/useArticle";
import useSearch from "../hooks/useSearch";
import "../../css/searchpage.css";



const SearchPage = () => {
    const [sort, setSort ] = useState(false);
    const {search, setSearch, error} = useSearch();
    const {articles, getArticle, getHeadLines} = useArticle(search, sort)

    useEffect(() => {
        getHeadLines()
    }, [])

    const debaunceGetArticle = useCallback(
        debounce(search =>{
            getArticle(search)
            // console.log('search', search);
        },500),
    [getArticle])  

    const handleChange = e => {
        const newSearch = e.target.value;
        setSearch(newSearch)
        debaunceGetArticle(newSearch)
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        getArticle(search)

    }
    const handleSort = () => {
        setSort(!sort);
    }
    
    return ( 
        <>
            <Header />
            <main className="container">
                <form action="" className="search-form" onSubmit={handleSubmit}>
                    <div className="search-form_container">
                        <div className="search-div_query">
                            <input  type="text" value={search} name="query" onChange={handleChange} className="search-input" placeholder="What are you looking for?" />
                            <button  type="submit" className="search-button"> <i className="bi bi-search"></i></button>
                        </div>
                        <div className="search-div_checkbox">
                            <input type="checkbox" onChange={handleSort} checked={sort} id="news"/>
                            <label htmlFor="news">News</label>

                            <input type="checkbox" onChange={handleSort} checked={sort} id="post"/>
                            <label htmlFor="post">Post</label>
                        </div>
                    </div>
                </form>
                {error && <p style={{color: 'red'}}>{error}</p>}
               <Article articulos={articles}/>
            </main>
        </>
    );
}
 
export default SearchPage;