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
    // Agrega la collection de post
    // async collect(post){
    //     try {
    //         const postRef = doc(collection(this.db, 'post'));
    //         await setDoc(postRef, {
    //             id: postRef.id, 
    //             ...post});
    //     } catch (error) {
    //         console.log(error, 'desde agregar post');
    //     }
    // }
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
    async getColletBy(tag){
        const postRef = collection(this.db, "post");
        const q = query(postRef, where("tag", "array-contains", tag));
        try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });   
        } catch (error) {
           console.log(error + "desde obtener"); 
        }
        
    }
}

const firebase = new Firebase();
export default firebase;