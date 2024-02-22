// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1nKB_mHqSHp_ZdprKXDV9_ojJELpeDoM",
  authDomain: "guestbook-4f2ce.firebaseapp.com",
  projectId: "guestbook-4f2ce",
  storageBucket: "guestbook-4f2ce.appspot.com",
  messagingSenderId: "662547818461",
  appId: "1:662547818461:web:67f05a40c64b76ff5a7834",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const loginWithEmailPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    throw err;
  }
};

export const registerWithEmailAndPassword = async (email, password) => {
  try {
    const resp = await createUserWithEmailAndPassword(auth, email, password);
    const user = resp.user;
    return user;
  } catch (err) {
    throw err;
  }
};
export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    throw err;
  }
};
