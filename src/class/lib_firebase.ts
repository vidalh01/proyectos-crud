import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, updateDoc, doc, getDocs, deleteDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDnLKagpCn0FkSo47sbFkzJjoMa6iQggc",
    authDomain: "escuela-944d0.firebaseapp.com",
    projectId: "escuela-944d0",
    storageBucket: "escuela-944d0.firebasestorage.app",
    messagingSenderId: "381881184935",
    appId: "1:381881184935:web:edbfd666bab40df00a6182",
    measurementId: "G-XNJNQ560JK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

class FB {

    private nameCollection: string

    /**
     * 
     * @param nameCollection es el nombre de la coleccion
     */
    constructor(nameCollection: string) {
        this.nameCollection = nameCollection
    }

    /**
     * 
     * @param nameCollection nombre de la coleccion
     * @returns un array
     * @example 
         FB.getItems(nameCollection)
        .then((res) => {
            xArr = res;
        })
     * @description consigue todos los datos del servidor y devuerve un arrObjs
     */
    async getItems(): Promise<any> {
        try {

            const collectionRef = collection(db, this.nameCollection);
            const querySnapshot = await getDocs(collectionRef);

            let arr = querySnapshot.docs.map((item: any) => {
                return {
                    id: item.id,
                    data: item.data()
                }
            });

            return arr

        } catch (e) {
            console.error("Error getting documents: ", e);
        }

    }

    /**
     * 
     * @param nameCollection nombre de la coleccion
     * @param xData objeto de datos a enviar
     * @example 
        FB.addItem(nameCollection, item)
        .then(() => {
            // FB.getItems
            actualizarDatos();
        })
     * @description agregar un item
     */
    async addItem(xData: any) {
        try {
            const collectionRef = collection(db, this.nameCollection);
            const docRef = await addDoc(collectionRef, xData);
            console.log("documento agregado con ID: ", docRef.id, xData);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    /**
     * 
     * @param nameCollection nombre de la coleccion
     * @param itemId id del item a actualizar
     * @param updatedData objeto de datos a enviar para actualizar
     * @example 
        FB.updateItem(nameCollection, userID.value, {
            example: xExample
        })
        .then(() => {
            // FB.getItems
            actualizarDatos();
        })
     * @description actualizar un item
     */
    async updateItem(itemId: any, updatedData: any) {
        try {
            const docRef = doc(db, this.nameCollection, itemId);
            await updateDoc(docRef, updatedData);
            console.log("documento actualizado con ID: ", itemId, updatedData);
        } catch (e) {
            console.error("Error updating document: ", e);
        }
    }

    /**
     * 
     * @param nameCollection nombre de la coleccion
     * @param itemId id del item a remover
     * @example     
         FB.remItem(nameCollection, userID)
        .then(() => {
            actualizarDatos();
        })
     * @description remover un item
     */
    async remItem(itemId: string) {
        try {
            const docRef = doc(db, this.nameCollection, itemId);
            await deleteDoc(docRef);
            console.log("documento eliminado con éxito");
        } catch (error) {
            console.error("Error al eliminar documento: ", error);
        }
    }

}


export { FB }