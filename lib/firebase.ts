// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZH02DIDzS69wxosXqsLCX_mFD3fpOCxA",
  authDomain: "scholarhub-477707.firebaseapp.com",
  projectId: "scholarhub-477707",
  storageBucket: "scholarhub-477707.firebasestorage.app",
  messagingSenderId: "503892607031",
  appId: "1:503892607031:web:1b42676137730d70b83fb2",
  measurementId: "G-SPT6Z410CF"
};

// Prevent reinitialization in Next.js hot reload
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
