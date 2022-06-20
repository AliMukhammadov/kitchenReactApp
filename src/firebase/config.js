import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvZEqAdWgjEBXSOubbH7FDYU6rWjOnCZM",
  authDomain: "cooking-ninja-583ef.firebaseapp.com",
  projectId: "cooking-ninja-583ef",
  storageBucket: "cooking-ninja-583ef.appspot.com",
  messagingSenderId: "359993035455",
  appId: "1:359993035455:web:1d67103e6a157afd7a540a",
  measurementId: "G-493HF19KP6",
};

// init config

firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
