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
                    <input  type="text" value={search} name="query" onChange={handleChange} className="search-input" placeholder="search" />
                    <button  type="submit" className="search-button"> Search</button>
                    <input type="checkbox" onChange={handleSort} checked={sort} />
                </form>
                {error && <p style={{color: 'red'}}>{error}</p>}
               <Article articulos={articles}/>
            </main>
        </>
    );
}
 
export default SearchPage;