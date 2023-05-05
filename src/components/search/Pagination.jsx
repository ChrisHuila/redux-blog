
export const DOTS = '...';
const currentPage = 10;
const siblingCount = 1;

const Pagination = ({totalCount}) => {
    const pageSize = 20;
    const totalPageCount = Math.ceil(totalCount/pageSize);

    const range = (start, end) => {
        let length = end - start + 1

        return Array.from({length}, (_,x) => x + start)
    }
    const pagination = () => {
        
        const totalPageNumbers = siblingCount + 9;
        if(totalPageNumbers >= totalPageCount){
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

        const shouldShowLeftDots = leftSiblingIndex > 4;
        const shouldShowRightDots = rightSiblingIndex <= totalPageCount -4;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if(!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 3*siblingCount;
            let leftRange = range(1 , leftItemCount)
            return [...leftRange, DOTS, totalPageCount]
        }
        if(shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex -1, rightSiblingIndex + 3 )
            return[firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
        }

        if(shouldShowLeftDots && !shouldShowRightDots) {
           let rightRange = range(leftSiblingIndex- 1, lastPageIndex)
           return[firstPageIndex, DOTS, ...rightRange ]
        }
    }
    return(
        <>
            <ul style={{listStyle: 'none', display: "flex", gap: '.5rem', fontSize: '.9rem', justifyContent: 'center'}}>
                {pagination()?.map(page => (
                    <li style={{border: '1px solid #ccc', padding: '4px 8px', cursor: 'pointer', backgroundColor: '#555', color: '#fff'}}> {page}</li>
                ))}
            </ul>
        </>
    )
    
}
export default Pagination;