import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import { auth } from './firebaseConfig.js'

document.addEventListener('DOMContentLoaded', function () {
    // const auth = getAuth();
    const lessonsPageUrl = 'courses.html';
    const loginPageUrl = 'login.html';

    // Check if the user is signed in
    onAuthStateChanged(auth, function (user) {
        if (user) {
            // User is signed in, allow access to the lessons page
            if (window.location.pathname.endsWith('login.html')) {
                window.location.href = lessonsPageUrl;
            }
        } else {
            // No user is signed in, redirect to the login page
            if (window.location.pathname.endsWith('courses.html')) {
                window.location.href = loginPageUrl;
            }
        }
    });
});
