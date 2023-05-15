import firebase from "../firebase/firebase";
import { 
    POST_FROM_FIREBASE
} from "../types";

const initialState = {
    firebase,
}

export default function(state= initialState, action){
    switch(action.type){
        default:
            return state;
    }
}