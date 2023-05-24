import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getIPAction, getIDpostAction } from "../actions/viewerAction";

const useViewer = ({id}) => {

    const dispatch = useDispatch()

    const { firebase } = useSelector(state => state.postReducer);
    const { viewer, viewid } = useSelector(state => state.viewer);

    const previousId = useRef(viewid)

    const setUserIP = (ip) => dispatch(getIPAction(ip));
    const currentPost = (id) => dispatch(getIDpostAction(id)); 

    useEffect(() => {

        const getIP = async () => {
            const url = "https://api64.ipify.org?format=json";
            const data = await fetch(url);
            const result = await data.json();

            const {ip} = result;

            setUserIP(ip);
        }
        getIP();
    },[])

    useEffect(() => {

        if(!viewer ||  previousId.current === id) return;
        previousId.current = id

        currentPost(id)
        firebase.updateViews(id);

    }, [viewer, id])

}

export default useViewer;