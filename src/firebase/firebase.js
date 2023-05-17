import { initializeApp } from 'firebase/app';
import firebaseConfig from './config';
import { 
    getFirestore, 
    collection,  
    doc,
    setDoc,
    query,
    where,
    getDocs, 
    onSnapshot,
    orderBy,
 } from "firebase/firestore";

class Firebase {
    constructor(){
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
    }
    // add to the collection´s post
    async collect(post){
        try {
            const postRef = doc(collection(this.db, 'post'));
            await setDoc(postRef, {
                id: postRef.id, 
                ...post});
        } catch (error) {
            console.log(error, 'desde agregar post');
        }
    }
    getCollet(){
        const post = [];
        const q = query(collection(this.db, "post"));
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                post.push(doc.data());
            });
          });
        return post;
    }
    async getColletBy(category){
        const post = [];
        const postRef = collection(this.db, "post");
        const q = query(postRef, where("category", "==", category));
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                post.push(doc.data());
            });
            return post; 
        } catch (error) {
           console.log(error + "desde obtener"); 
        }
        
    }
}

const firebase = new Firebase();
export default firebase;