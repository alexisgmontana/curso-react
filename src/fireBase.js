import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJl0Ut6WJxWj3R4bbLf1VPsqZAt3_l_70",
  authDomain: "cursoreact-coder.firebaseapp.com",
  projectId: "cursoreact-coder",
  storageBucket: "cursoreact-coder.appspot.com",
  messagingSenderId: "615266440418",
  appId: "1:615266440418:web:23b8719c9ce9fed4253abb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
