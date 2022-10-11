// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr2q4iWqTBr3zyvDqA4bVyotapc_QCei8",
  authDomain: "clone-f3f23.firebaseapp.com",
  projectId: "clone-f3f23",
  storageBucket: "clone-f3f23.appspot.com",
  messagingSenderId: "121553548711",
  appId: "1:121553548711:web:56120c8b694016571e3282",
  measurementId: "G-W3FY2Z2YPY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {auth};
