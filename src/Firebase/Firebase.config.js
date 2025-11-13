// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw2PXaOddbt1HgZVoEnqynCCg0dT6ZY8A",
  authDomain: "homehero-2a2cf.firebaseapp.com",
  projectId: "homehero-2a2cf",
  storageBucket: "homehero-2a2cf.firebasestorage.app",
  messagingSenderId: "829149508479",
  appId: "1:829149508479:web:95066dd5252a8f99fe604a",
  measurementId: "G-PBGN2QRG9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);