import { usePagination, DOTS } from "../../hooks/usePagination";
import "./pagination.css"

const Pagination = (props) => {
    const {totalCount, currentpage, setCurrentPage} =  props

    const pageSize = 20;
    const siblingCount = 1;
    const totalPageCount = Math.ceil(totalCount/pageSize);

    const paginationRange = usePagination({currentpage, siblingCount, totalPageCount})
    
//   console.log(paginationRange);
    return(
        <>
            <ul className="pagination" >
                {paginationRange?.map( page => (
                   page !== DOTS 
                   ? <li 
                    key={page}
                    className="pagination-numbers"
                    onClick={() => (setCurrentPage(page), console.log(page))}

                    > {page}</li>
                    : <li className="" key={Date.now()*Math.random()*10}>&#8230;</li>
                ))
                }
            </ul>
        </>
    )
    
}
export default Pagination;