import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getIPAction, getIDpostAction } from "../actions/viewerAction";

const useViewer = ({id}) => {

    const dispatch = useDispatch()

    const { firebase } = useSelector(state => state.postReducer);
    const { viewer, previousview } = useSelector(state => state.viewer);

    const previousViewId = useRef(previousview)

    const setUserIP = (ip) => dispatch(getIPAction(ip));
    const currentPost = (id) => dispatch(getIDpostAction(id)); 

    useEffect(() => {

        // get ip viewer
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
        // update the views's post 
        if(!viewer ||  previousViewId.current === id) return;
        previousViewId.current = id

        currentPost(id)
        firebase.updateViews(id);

    }, [viewer, id])

}

export default useViewer;