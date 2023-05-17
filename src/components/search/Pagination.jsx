import { useSelector } from "react-redux";
import { usePagination, DOTS } from "../../hooks/usePagination";
import scrollLink from "../helpers/ScrollLink";

import "./pagination.css"

const Pagination = (props) => {
    const { search, totalCount, currentpage, errorfetch, setCurrentPage, setLoading} =  props

    const pageSize = 20;
    const siblingCount = 1;

    // Due to the API "https://newsapi.org/", only 100 results are allowed.    

    let totalPageCount;
    if(Math.ceil(totalCount/pageSize) < 6){
        totalPageCount = Math.ceil(totalCount/pageSize);
    }else{
        totalPageCount = 5;
    }

    // Custom hook
    const paginationRange = usePagination({currentpage, siblingCount, totalPageCount})
    
    if(totalCount <= 1 || errorfetch || search === "") return 

    const handleClick = (page) => {
        setCurrentPage(page)
        setLoading(true)
        scrollLink(0)
    }
 
    return(
        <>
            <ul className="pagination" >
                {paginationRange?.map( page => (
                   page !== DOTS 
                   ? <li 
                    key={page}
                    className={page !== currentpage ? 'pagination-numbers' : 'pagination-currentPage'}
                    onClick={() => handleClick(page)}

                    > {page}</li>
                    : <li className="" key={Date.now()*Math.random()*10}>&#8230;</li>
                ))
                }
            </ul>
        </>
    )
    
}
export default Pagination;