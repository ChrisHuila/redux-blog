import { initializeApp } from 'firebase/app';
import firebaseConfig from './config';
import { getFirestore, collection,  doc, setDoc} from "firebase/firestore";

class Firebase {
    constructor(){
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
    }
    // Agrega la collection de productos
    async collect(post){
        try {
            const postRef = doc(collection(this.db, 'post'));
            await setDoc(postRef, {
                id: postRef.id, 
                ...post});
                
        } catch (error) {
            console.log(error, 'desde agregar producto');
        }
    }
}

const firebase = new Firebase();
export default firebase;