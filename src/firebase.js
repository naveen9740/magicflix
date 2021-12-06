import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9N61Vpu1W7gSdEAYo1PFGiLwphr5wXVM",
  authDomain: "magicflix-4beea.firebaseapp.com",
  projectId: "magicflix-4beea",
  storageBucket: "magicflix-4beea.appspot.com",
  messagingSenderId: "420003453161",
  appId: "1:420003453161:web:63d799ecff0fe90ed9f878",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default db;
