
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1s2-KkaS0opFgIzxL7Knmhg4qs16yQfI",
  authDomain: "dataed-00.firebaseapp.com",
  projectId: "dataed-00",
  storageBucket: "dataed-00.appspot.com",
  messagingSenderId: "702756345016",
  appId: "1:702756345016:web:c988fd0353d1ecbbabd04d",
  measurementId: "G-JZZ658PES4"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const app =  initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);