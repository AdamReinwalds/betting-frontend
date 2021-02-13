import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyBWlyMYtTzlYoeN2Bri9mPROHTH7Q6eOYA",
    authDomain: "scrape-853ad.firebaseapp.com",
    databaseURL: "https://scrape-853ad-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "scrape-853ad",
    storageBucket: "scrape-853ad.appspot.com",
    messagingSenderId: "493747730370",
    appId: "1:493747730370:web:4db57f9f448c4521bf885b",
    measurementId: "G-5Z6LZN8ZFB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;