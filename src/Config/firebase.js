import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBo4lKNhD2IXDbaxpOLOE41QBITH2XvQVY",
  authDomain: "bookstore-e4665.firebaseapp.com",
  projectId: "bookstore-e4665",
  storageBucket: "bookstore-e4665.appspot.com",
  messagingSenderId: "531964328879",
  appId: "1:531964328879:web:fb695685c77a24c36c8d5a",
  measurementId: "G-RTP8ERLB80"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { app as default, db, auth };