// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBUTlxdPNh7qTLPvw0depuDnMY-J9D1yU",
  authDomain: "expo-note-a4b7a.firebaseapp.com",
  projectId: "expo-note-a4b7a",
  storageBucket: "expo-note-a4b7a.firebasestorage.app",
  messagingSenderId: "1089813665631",
  appId: "1:1089813665631:web:9a26e060ce843fe89908ea",
  measurementId: "G-SKLV39RNVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db, onAuthStateChanged };