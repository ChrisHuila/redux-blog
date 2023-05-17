import { useEffect, useState, useRef } from "react";

const useSearch = ({post, news}) => {
    const [search, setSearch] = useState('')
    const [ error, setError ] = useState(null)
    
    // This value is changeable throughout the life cycle of the component
    const isfirtInputArticle = useRef(true);
    const isfirtInputPosts = useRef(true);

    // Validate the search query
    useEffect(() => {
        // "If it is the first input, do not show the error."
        if(isfirtInputArticle.current && news){
            isfirtInputArticle.current = search === '';
            return
        }else if(isfirtInputPosts.current && post) {
            isfirtInputPosts.current = search === '';
            return
        }

        if(search === '') {
            setError('Type your Search'); 
            return
        }
        
        setError(null)
    }, [search])

    return {search, setSearch, error }
}
export default useSearch;