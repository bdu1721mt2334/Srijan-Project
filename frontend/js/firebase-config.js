import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqxApQXPczuh2oQ711LAESJwFOEtkeFww",
  authDomain: "vendarmanagement.firebaseapp.com",
  projectId: "vendarmanagement",
  storageBucket: "vendarmanagement.firebasestorage.app",
  messagingSenderId: "714047010254",
  appId: "1:714047010254:web:990340453eab84bbc3e79f",
  measurementId: "G-YPEZL1DMCL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
