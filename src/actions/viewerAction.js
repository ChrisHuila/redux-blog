import { 
    SET_VIEWER,
    GET_ID_POST
} from "../types";

export function getIPAction(ip) {
    return(dispatch) => {
        dispatch(getIP(ip))
    }
}
const getIP = (ip) => ({
    type: SET_VIEWER,
    payload: ip
})

export function getIDpostAction(id){
    return(dispatch) => {
        dispatch(getIDpost(id))
    }
}

const getIDpost = (id) => ({
    type: GET_ID_POST,
    payload: id
})