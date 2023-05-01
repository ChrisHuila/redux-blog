import { useEffect, useState } from "react";


export function useFixed () {

    const [ isFixed, setIsFixed ] = useState(false) 

    const positionStyles = { 
        position: 'fixed', 
        zIndex: '100',
        //boxShadow: 'rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
        //backgroundColor: '#0093E9',
        //backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
        backgroundColor: 'white',
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        })
    }, [])


    return {
        isFixed, positionStyles
    }
}