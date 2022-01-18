import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyD63OjjNLmVmmCUnYtV_lMX-PyUSu3_HEo",
    authDomain: "twitter-clone-cd235.firebaseapp.com",
    projectId: "twitter-clone-cd235",
    storageBucket: "twitter-clone-cd235.appspot.com",
    messagingSenderId: "194219567118",
    appId: "1:194219567118:web:c34169832ffcd24008745f",
    measurementId: "G-K1JR9NYG5M"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;