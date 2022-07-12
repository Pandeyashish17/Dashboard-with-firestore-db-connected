import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "{your api key}",
  authDomain: "mern-course-a55bc.firebaseapp.com",
  projectId: "mern-course-a55bc",
  storageBucket: "mern-course-a55bc.appspot.com",
  messagingSenderId: "121305511003",
  appId: "1:121305511003:web:352437f862b8a7c0893b7e"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);