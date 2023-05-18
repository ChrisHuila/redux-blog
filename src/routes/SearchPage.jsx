import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";    
import debounce from "just-debounce-it";
import Article from "../components/search/Article";
import Pagination from "../components/search/Pagination";
import ErrorServer from "../components/helpers/ErrorServer";
import Post from "../components/search/post/Post";
import useArticle from "../hooks/useArticle";
import useSearch from "../hooks/useSearch";
import usePosts from "../hooks/usePosts";

// Action Redux
import { showNews, showPost } from "../actions/checkboxAction";


const SearchPage = () => {
    // access to the state
    const { post, news } = useSelector(state => state.checkbox);
    
    
    const dispatch = useDispatch();

    const [sort , setSort] = useState(false);
    const [currentpage, setCurrentPage] = useState(1)

    // Custom hook
    const {search, setSearch, error} = useSearch({post, news});
    const {articles,totalcount, loading, errorfetch , getArticle, setLoading} = useArticle(search, sort, news, currentpage)
    const { getPosts, getAllPosts} = usePosts({search , sort});
        
    const handleCheck = e => {
        setSearch("")
        const {name} = e.target
        if(name === 'post') {
            dispatch(showPost())
            getAllPosts()
        }else {
            dispatch(showNews()) 
        }

    }
    // only perform the search when getArticle change
    const debaunceGetArticle = useCallback(
        debounce((search, currentpage) =>{
            getArticle(search, currentpage)
            getPosts(search)
        },500),
    [getArticle, getPosts])  

    // perform the search
    const handleChange = e => {
        const newSearch = e.target.value;
        const starSearch = newSearch.trim();

        setSearch(starSearch)
        setCurrentPage(1)
        debaunceGetArticle(starSearch, currentpage )
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        getArticle(search, currentpage)
        getPosts(search)
    }
    //TODO enable search for either news or post
    const handleSort = () => {
        setSort(!sort)
    }

    return ( 
        <>
            <main className="container-box">
                <form action="" className="search-form" onSubmit={handleSubmit}>
                    <div className="search-form_container">
                        <div className="search-div_query">
                            <input  type="text" value={search} name="query" onChange={handleChange} className="search-input" placeholder={news ? "What are you looking for?" : "Search Post by tag or specific phrase"} />
                            <button  type="submit" className="search-button"> <i className="bi bi-search"></i></button>
                        </div>
                        <div className="search-div_checkbox">
                            <input type="checkbox" name="news" checked={news} onChange={handleCheck} id="news"/>
                            <label htmlFor="news">News</label>

                            <input type="checkbox" name="post" checked={post} onChange={handleCheck}  id="post"/>
                            <label htmlFor="post">Post</label>

                            <input type="checkbox" name="sort" onChange={handleSort} checked={sort} id="sort"/>
                            <label htmlFor="sort">Sort by name</label>
                        </div>
                    </div>
                </form>
                {error && <p style={{color: 'red', textAlign: 'center'}}>{error}</p>}
                {errorfetch && <ErrorServer />}
                
                <Pagination
                    search={search}
                    totalCount={totalcount}
                    currentpage={currentpage}
                    errorfetch={errorfetch}
                    news={news}
                    setCurrentPage={setCurrentPage}
                    setLoading={setLoading}
                />

            
                {news 
                ? <Article 
                    // articles={articles}
                    // loading={loading}
                    errorfetch={errorfetch} 
                    />
                :  <Post />
                }

                
                <Pagination
                    search={search}
                    totalCount={totalcount}
                    currentpage={currentpage}
                    errorfetch={errorfetch}
                    news={news}
                    setCurrentPage={setCurrentPage}
                    setLoading={setLoading}
                />

               
            </main>
        </>
    );
}
 
export default SearchPage;