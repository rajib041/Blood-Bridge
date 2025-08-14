// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqg_kVXOxMlRFprLBkBt766oo692o2WxA",
    authDomain: "blood-bridge-48af4.firebaseapp.com",
    projectId: "blood-bridge-48af4",
    storageBucket: "blood-bridge-48af4.firebasestorage.app",
    messagingSenderId: "536103364000",
    appId: "1:536103364000:web:87ecd33745c9a7a572b0c5",
    measurementId: "G-G6DEG3RGF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 

// Submit btn
const btn = document.getElementById("sub-btn");

btn.addEventListener('click', function (event) {
    event.preventDefault();

    // inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Account created successfully!");
        })
        .catch((error) => {
            alert(`Error: ${error.code} - ${error.message}`);
        });
});
