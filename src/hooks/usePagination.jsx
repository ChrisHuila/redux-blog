import {useMemo, useRef} from 'react';

export const DOTS = '...';

const range = (start, end) => {
    let length = end - start + 1

    return Array.from({length}, (_,x) => x + start)
}

export const usePagination = ({currentpage, siblingCount, totalPageCount}) => {
    
    const newMiddleRangeRight = useRef(1);
    const newMiddleRangeLeft = useRef(1);
    const previousMiddleRange = useRef([]);

     const paginationRange = useMemo(() => {
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        // if there are fewer than 10 elements
        const totalPageNumbers = siblingCount + 9;
        if(totalPageNumbers >= totalPageCount){
            return range(1, totalPageCount);
        }
    
        const leftSiblingIndex = Math.max(currentpage - siblingCount, firstPageIndex);
        const rightSiblingIndex = Math.min(currentpage + siblingCount, totalPageCount)
    
        const shouldShowLeftDots = leftSiblingIndex > 4;
        const shouldShowRightDots = rightSiblingIndex <= totalPageCount -4;
    
        // Enable left range
        if(!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 3*siblingCount;
            let leftRange = range(1 , leftItemCount)
            return [...leftRange, DOTS, totalPageCount]
        }

        // Enable middle range
        if(shouldShowLeftDots && shouldShowRightDots ) {
                   
            if(newMiddleRangeRight.current <= currentpage || newMiddleRangeLeft.current >= currentpage  ){

                let leftwardRange = leftSiblingIndex -1;
                let rightwardRange = rightSiblingIndex + 3;

                let middleRange = range(leftwardRange, rightwardRange )
                
                // Set the conditions to generate a new range 
                newMiddleRangeRight.current = rightwardRange;
                newMiddleRangeLeft.current = leftwardRange;

                // "prevent data loss" 
                previousMiddleRange.current = [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]

                return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
            }else{
                return previousMiddleRange.current
            }
        }

        // Enable right range
        if(shouldShowLeftDots && !shouldShowRightDots) {
           let rightRange = range(leftSiblingIndex- 1, lastPageIndex)
           return[firstPageIndex, DOTS, ...rightRange ]
        }

     },[currentpage, totalPageCount ]);

   return paginationRange;
}