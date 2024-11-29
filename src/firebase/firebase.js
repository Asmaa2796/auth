// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7ee4HbPfFJvoIIA5bqViuQmt4m8mWLGY",
  authDomain: "authentication-e2a2f.firebaseapp.com",
  projectId: "authentication-e2a2f",
  storageBucket: "authentication-e2a2f.firebasestorage.app",
  messagingSenderId: "116309114884",
  appId: "1:116309114884:web:1457e5f7501e771f8cb551"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;