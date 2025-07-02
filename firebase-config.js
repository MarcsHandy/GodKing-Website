// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAhirW2cbOO6WvOk6A7qxUNbDp9SHSMc0",
    authDomain: "united-africa-empire.firebaseapp.com",
    projectId: "united-africa-empire",
    storageBucket: "united-africa-empire.firebasestorage.app",
    messagingSenderId: "729918835659",
    appId: "1:729918835659:web:fd8fd59fb3f56cef36844e",
    measurementId: "G-GPQKY68JP7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();