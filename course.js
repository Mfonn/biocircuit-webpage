// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaZKOdfFpX3iBxUffRhp-QQdOBQK3__AQ",
  authDomain: "womb-intelligence-lms.firebaseapp.com",
  projectId: "womb-intelligence-lms",
  storageBucket: "womb-intelligence-lms.firebasestorage.app",
  messagingSenderId: "442314888776",
  appId: "1:442314888776:web:5d22fc60750d00e0232a7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Get Firebase services
const auth = getAuth(app);
const db = firebase.firestore();

// ✅ Sign Up Function
function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Sign-up successful!");
        })
        .catch(error => {
            alert(error.message);
        });
}

// ✅ Log In Function
function logIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            document.getElementById("auth").style.display = "none";
            document.getElementById("course-content").style.display = "block";
        })
        .catch(error => {
            alert(error.message);
        });
}

