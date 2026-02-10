// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPsrIybENoqo_B_rV1SE7ik-BaD6HVCmk",
  authDomain: "school-admission-xcmore.firebaseapp.com",
  projectId: "school-admission-xcmore",
  storageBucket: "school-admission-xcmore.firebasestorage.app",
  messagingSenderId: "892874462868",
  appId: "1:892874462868:web:5e21fd2a30ce9a8d1d4681",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
