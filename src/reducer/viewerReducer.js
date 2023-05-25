import { 
    SET_VIEWER,
    GET_ID_POST
 } from "../types";

const initialState = {
    viewer: null,
    previousview: null,
}

export default function( state= initialState, action){
    switch(action.type){
        case SET_VIEWER:
            return {
                ...state,
                viewer: action.payload
            }
        case GET_ID_POST:
            return{
                ...state,
                previousview: action.payload
            }

        default:
            return state;
    }
}