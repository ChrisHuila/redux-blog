
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getIPAction, getIDpostAction } from "../actions/viewerAction";

const useLove = ({id}) => {

    const user = {
        displayName: 'camila',
        photoURL: "www",
        id: '123456'
    }
    
    const love = [
        {
            displayName: 'ana',
            photoURL: "www",
            id: '123457'
        },
        {
            displayName: 'valeria',
            photoURL: "www",
            id: '123458'
        },
        
    ]

    const dispatch = useDispatch()

    const { firebase } = useSelector(state => state.postReducer);
    const { viewer, viewid } = useSelector(state => state.viewer);

    const previousId = useRef(viewid)

    const setUserIP = (ip) => dispatch(getIPAction(ip));
    const currentPost = (id) => dispatch(getIDpostAction(id)); 

    useEffect(() => {
        // update the views's post 
        if(!viewer ||  previousId.current === id) return;
        previousId.current = id

        currentPost(id)
        firebase.updateViews(id);

    }, [viewer, id])

    useEffect(() => {
        if(!user) return;
    },[user])

}

export default useLove;