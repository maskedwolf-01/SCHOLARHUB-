// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration (hardcoded)
const firebaseConfig = {
  apiKey: "AIzaSyDZH02DIDzS69wxosXqsLCX_mFD3fpOCxA",
  authDomain: "scholarhub-477707.firebaseapp.com",
  projectId: "scholarhub-477707",
  storageBucket: "scholarhub-477707.appspot.com",
  messagingSenderId: "503892607031",
  appId: "1:503892607031:web:1b42676137730d70b83fb2",
  measurementId: "G-SPT6Z410CF",
};

// Initialize Firebase (avoid double-init)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
