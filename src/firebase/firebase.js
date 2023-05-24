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
    orderBy,
    limit,
    updateDoc,
    increment  
 } from "firebase/firestore";

class Firebase {
    constructor(){
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
    }
    
    // add to the collection´s post
    async collect(element, nameCollect){
        try {
            const postRef = doc(collection(this.db, nameCollect));
            await setDoc(postRef, {
                id: postRef.id, 
                ...element});
        } catch (error) {
            console.log(error, 'desde agregar colleccion');
        }
    }
    async getCollet(){

        const post = [];
        const q = query(collection(this.db, "entries"), orderBy("date", "desc"),limit(20));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            post.push(doc.data());
        });
        return post;
    }
    
    async getColletBy(search){
        const post = [];
        const postRef = collection(this.db, "entries");
        const q = query(postRef, where("taggs", "array-contains", search));
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

    async updateViews(id){
      try {

        const postRef = doc(this.db, "entries", id);
        await updateDoc(postRef, {
            views: increment(1)
        });

      } catch (error) {
        console.log('error desde views', error);
      }
    }
}

const firebase = new Firebase();
export default firebase;