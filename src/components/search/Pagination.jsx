import { usePagination, DOTS } from "../../hooks/usePagination";
import "./pagination.css"

const Pagination = (props) => {
    const {totalCount, currentpage,errorfetch, setCurrentPage} =  props

    const pageSize = 20;
    const siblingCount = 1;
    const totalPageCount = Math.ceil(totalCount/pageSize);

    const paginationRange = usePagination({currentpage, siblingCount, totalPageCount})
    
//   console.log(paginationRange);
    if(totalCount <= 1 || errorfetch) return
 
    return(
        <>
            <ul className="pagination" >
                {paginationRange?.map( page => (
                   page !== DOTS 
                   ? <li 
                    key={page}
                    className={page !== currentpage ? 'pagination-numbers' : 'pagination-currentPage'}
                    onClick={() => (setCurrentPage(page))}

                    > {page}</li>
                    : <li className="" key={Date.now()*Math.random()*10}>&#8230;</li>
                ))
                }
            </ul>
        </>
    )
    
}
export default Pagination;