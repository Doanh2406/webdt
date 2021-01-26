import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDy1t03EHhyGKVF2UrECZOG4a1GV41AZrY",
    authDomain: "webdt-1.firebaseapp.com",
    databaseURL: "https://webdt-1.firebaseio.com",
    projectId: "webdt-1",
    storageBucket: "webdt-1.appspot.com",
    messagingSenderId: "970529549023",
    appId: "1:970529549023:web:fd1e132a63823ecf1bd76a",
    measurementId: "G-QKNKJ87N66"
  };
  firebase.initializeApp(firebaseConfig);

  export const firebaseAuth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storageRef = firebase.storage().ref();
  export default firebase;