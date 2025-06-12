// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //   apiKey: "YOUR_API_KEY",
  //   authDomain: "YOUR_PROJECT.firebaseapp.com",
  //   projectId: "YOUR_PROJECT_ID",
  //   storageBucket: "YOUR_PROJECT.appspot.com",
  //   messagingSenderId: "YOUR_MESSAGING_ID",
  //   appId: "YOUR_APP_ID",

  apiKey: "AIzaSyC8YIzy44_YuADdaTmrwPON_ZJYzuOx9M0",
  authDomain: "freedom-filling.firebaseapp.com",
  projectId: "freedom-filling",
  storageBucket: "freedom-filling.firebasestorage.app",
  messagingSenderId: "810564220294",
  appId: "1:810564220294:web:2fce88d0ce8be3590e2807",
  measurementId: "G-H7ZZKLZ02V",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
