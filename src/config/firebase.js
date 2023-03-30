import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyBqZge7m9XrgV6nRAHejaX2y_qlawIrMMc",
  authDomain: "fir-project-90c66.firebaseapp.com",
  projectId: "fir-project-90c66",
  storageBucket: "fir-project-90c66.appspot.com",
  messagingSenderId: "930666805188",
  appId: "1:930666805188:web:a976ee2c2be74441f0d691",
  measurementId: "G-KNVY0V6TPF"
};

const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);