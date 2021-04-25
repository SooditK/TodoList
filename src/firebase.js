import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBEEWNwEa3Uh03KcxbVcdQYjXqZbAp_U_8",
  authDomain: "todolist-9d16a.firebaseapp.com",
  databaseURL: "https://todolist-9d16a-default-rtdb.firebaseio.com",
  projectId: "todolist-9d16a",
  storageBucket: "todolist-9d16a.appspot.com",
  messagingSenderId: "472989907726",
  appId: "1:472989907726:web:3aeb758a84702f1fdeb55f",
});

export { firebaseConfig as firebase };
