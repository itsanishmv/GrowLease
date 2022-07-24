import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "growlease-88203.firebaseapp.com",
  projectId: "growlease-88203",
  storageBucket: "growlease-88203.appspot.com",
  messagingSenderId: "944089713122",
  appId: process.env.REACT_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Db = getFirestore(app);
export const Storage = getStorage(app);
