// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries Your web app's
// Firebase configuration For Firebase JS SDK v7.20.0 and later, measurementId
// is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhr1rkNJnNFTZfRl74WF2pg9YYS_gEeLU",
    authDomain: "a-bine.firebaseapp.com",
    databaseURL: "https://a-bine-default-rtdb.firebaseio.com",
    projectId: "a-bine",
    storageBucket: "a-bine.appspot.com",
    messagingSenderId: "394000401238",
    appId: "1:394000401238:web:f98e7fd17abfe23793ccf7",
    measurementId: "G-R78CFC8GT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);