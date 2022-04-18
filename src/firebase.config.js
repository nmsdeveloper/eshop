/*==================== INITIALIZEAPP ====================*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
/*==================== INITIALIZEAPP ====================*/

/*==================== ANALYTICS ====================*/
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
/*==================== ANALYTICS ====================*/

/*==================== AUTHENTICATION ====================*/
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
/*==================== AUTHENTICATION ====================*/

/*==================== FIRESTORE ====================*/
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";
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
const googleProvider = new GoogleAuthProvider(app);
const githubProvider = new GithubAuthProvider(app);
const store = getFirestore(app);
/*==================== FIREBASECONFIG ====================*/

/*==================== CREATE USER ====================*/
export function createUser({ alert, popup, email, password }) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = "/src/pages/home.html";
    })
    .catch((error) => {
      const errorMessage = error.message;

      popup.textContent = `[+]${errorMessage}[+]`;
      alert.classList.add("show-pop");

      setTimeout(() => {
        alert.classList.remove("show-pop");
      }, 2500);
    });
}
/*==================== CREATE USER ====================*/

/*==================== SIGNIN USER ====================*/
export function signinUser({ alert, popup, email, password }) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = "/src/pages/home.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      popup.textContent = `[+]${errorMessage}[+]`;
      alert.classList.add("show-pop");

      setTimeout(() => {
        alert.classList.remove("show-pop");
      }, 2500);
    });
}
/*==================== SIGNIN USER ====================*/

/*==================== SIGNIN GOOGLE ====================*/
export function signGoogle({ alert, popup }) {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      window.location.href = "/src/pages/home.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      const errorEmail = error.email;

      popup.textContent = `[+]${errorMessage}[+] - [+]${errorEmail}[+]`;
      alert.classList.add("show-pop");

      setTimeout(() => {
        alert.classList.remove("show-pop");
      }, 2500);
    });
}
/*==================== SIGNIN GOOGLE ====================*/

/*==================== SIGNIN GITHUB ====================*/
export function signGithub({ alert, popup }) {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      window.location.href = "/src/pages/home.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      const errorEmail = error.email;

      popup.textContent = `[+]${errorMessage}[+] [+]${errorEmail}[+]`;
      alert.classList.add("show-pop");

      setTimeout(() => {
        alert.classList.remove("show-pop");
      }, 2500);
    });
}
/*==================== SIGNIN GITHUB ====================*/

/*==================== AUTHENT STATUS ====================*/
export function verifyStatus() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
    }
  });
}
/*==================== AUTHENT STATUS ====================*/

/*==================== SIGNOUT USER ====================*/
export function signout({ alert, popup }) {
  signOut(auth)
    .then(() => {
      window.location.href = "/src/pages/authentication.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      popup.textContent = `[+]${errorMessage}[+]`;
      alert.classList.add("show-pop");

      setTimeout(() => {
        alert.classList.remove("show-pop");
      }, 2500);
    });
}
/*==================== SIGNOUT USER ====================*/
