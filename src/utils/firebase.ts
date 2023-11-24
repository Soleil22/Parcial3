import firebaseConfig from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc
  } from "firebase/firestore";

export const addRecordatorio = async (Recordatorio: any)=>{
    try {
        const where = collection(db, "Recordatorios");
        await addDoc(where, Recordatorio);
        console.log("se añadió con éxito");
    } catch (error) {
        console.error(error);
    }
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);