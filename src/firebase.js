// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGyrA8lGPFIFDMFCjBBr1N64kYGh3mEwk",
  authDomain: "clone-4dbed.firebaseapp.com",
  projectId: "clone-4dbed",
  storageBucket: "clone-4dbed.appspot.com",
  messagingSenderId: "686229376526",
  appId: "1:686229376526:web:d423407108a6c905f5b65f",
  measurementId: "G-GVCYL5SETE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
