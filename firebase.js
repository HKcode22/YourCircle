// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirebase, getFirestore, writeBatch} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_CYfQAMgmdUdpsGA7ffwIg3aQUdWIX_A",
  authDomain: "mycircle-32851.firebaseapp.com",
  projectId: "mycircle-32851",
  storageBucket: "mycircle-32851.appspot.com",
  messagingSenderId: "460400830586",
  appId: "1:460400830586:web:3b0889e4d40231c1a433c3",
  measurementId: "G-43WE1VE83Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};