import { useEffect, useState } from "react";


export function useGetWidth () {
    
    const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

    let [width, setWidth] = useState(getWidth());
  
    //el useEffect se ejecutara una sola vez por que no tiene dependencias
    useEffect(() => {
      // para limpiar el timeout
      let timeoutId = null;
      const resizeListener = () => {
        //previene la ejecucion antes del timeout
        clearTimeout(timeoutId);
        // cambia el estado despues de 100milisegundos
        timeoutId = setTimeout(() => setWidth(getWidth()), 150);
      }
      // agregamos el listener rezise
      window.addEventListener('resize', resizeListener);
  
      //funcion para limpiar
      return () => {
        // quitamos el listener (simula unMounted)
      window.removeEventListener('resize', resizeListener);
      }
    }, [])

    return {
        width
    }
    
}