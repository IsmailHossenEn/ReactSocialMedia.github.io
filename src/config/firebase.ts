// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPdfiGXlVX5oikXl2NMTe--S3sT_0Enws",
  authDomain: "react-socialmedia-fa367.firebaseapp.com",
  projectId: "react-socialmedia-fa367",
  storageBucket: "react-socialmedia-fa367.appspot.com",
  messagingSenderId: "357823318073",
  appId: "1:357823318073:web:b12b52be8927befba4e5e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
