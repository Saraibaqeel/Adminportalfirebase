import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBIDfpMf7a6hHD2MZPUfGaNwzT7ouRWv0",
  authDomain: "hackathon-cb079.firebaseapp.com",
  projectId: "hackathon-cb079",
  storageBucket: "hackathon-cb079.appspot.com",
  messagingSenderId: "911016422507",
  appId: "1:911016422507:web:9ed02379ddd5bc6931952e",
  measurementId: "G-MHK362CJS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
let email=document.getElementById("login-email")
let password=document.getElementById("login-password")
const auth = getAuth();
let loginbtn=document.getElementById("button2")
loginbtn.addEventListener("click",function(){
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
   window.location="admin.html"

    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage,
        
      })
  });
})