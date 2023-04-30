import { useEffect, useState, useRef } from "react";

const useSearch = () => {
    const [search, setSearch] = useState('')
    const [ error, setError ] = useState(null)
    const isfirtInput = useRef(true);
    useEffect(() => {
        if(isfirtInput.current){
            isfirtInput.current = search === '';
            return
        }
        if(search === '') {
            setError('No se puede buscar un articulo vacio'); 
            return
        }
        if (search.length <= 3) {
            setError('la busqueda tiene que ser mayor de 3 letras'); 
            return
        }
        setError(null)
    }, [search])
    return {search, setSearch, error }
}
export default useSearch;