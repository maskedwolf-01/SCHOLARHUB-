// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// ----- Hardcoded Firebase config -----
const firebaseConfig = {
  apiKey: "AIzaSyDZH02DIDzS69wxosXqsLCX_mFD3fpOCxA",
  authDomain: "scholarhub-477707.firebaseapp.com",
  projectId: "scholarhub-477707",
  storageBucket: "scholarhub-477707.appspot.com",
  messagingSenderId: "503892607031",
  appId: "1:503892607031:web:1b42676137730d70b83fb2",
  measurementId: "G-SPT6Z410CF",
};

// Initialize Firebase (prevent double initialization)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
