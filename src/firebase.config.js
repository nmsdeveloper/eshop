/*==================== INITIALIZEAPP ====================*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
/*==================== INITIALIZEAPP ====================*/

/*==================== ANALYTICS ====================*/
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
/*==================== ANALYTICS ====================*/

/*==================== AUTHENTICATION ====================*/
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
/*==================== AUTHENTICATION ====================*/

/*==================== FIRESTORE ====================*/
import {} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
/*==================== FIRESTORE ====================*/

/*==================== FIREBASECONFIG ====================*/
const firebaseConfig = {
  apiKey: "AIzaSyD52eu8wZByW51ytoGLevu3f4cY1-39Qr0",
  authDomain: "nms-projet.firebaseapp.com",
  projectId: "nms-projet",
  storageBucket: "nms-projet.appspot.com",
  messagingSenderId: "250532322646",
  appId: "1:250532322646:web:a7463fd92f113f1576caf7",
  measurementId: "G-J99L24SQJT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
/*==================== FIREBASECONFIG ====================*/

/*==================== VERIFYSTATUS ====================*/
export function verifyStatus() {}
/*==================== VERIFYSTATUS ====================*/
