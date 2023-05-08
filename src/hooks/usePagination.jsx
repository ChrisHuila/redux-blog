import {useMemo, useRef, useState} from 'react';

export const DOTS = '...';

const range = (start, end) => {
    let length = end - start + 1

    return Array.from({length}, (_,x) => x + start)
}

export const usePagination = ({currentpage, siblingCount, totalPageCount}) => {
    
    const newMiddleRange = useRef(1);
    const previousMiddleRange = useRef([]);
    const [middlenumber, setMiddleNumber] = useState([])

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
            let shiftRange  = newMiddleRange.current - 4;

            // Put the number that enable a new middle range
            if(!middlenumber.includes(shiftRange)){
                setMiddleNumber([...middlenumber, shiftRange])
            } 
            
            if(newMiddleRange.current <= currentpage || middlenumber.includes(currentpage)){

                let leftwardRange = leftSiblingIndex -1;
                let rightwardRange = rightSiblingIndex + 3;

                let middleRange = range(leftwardRange, rightwardRange )

                newMiddleRange.current = rightwardRange;

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

     },[currentpage, totalPageCount, middlenumber ]);

   return paginationRange;
}