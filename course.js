
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
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

    //get ref to database services
    const db = getDatabase(app);

    document.getElementById("submit").addEventListener('click', function(e){
     e.preventDefault();
     set(ref(db, 'user/' + document.getElementById("username").value),
     {

       username: document.getElementById("username").value,
       email: document.getElementById("email").value,
       PhoneNumber: document.getElementById("phone").value

     });
       alert("Login Sucessfull  !");
    })
