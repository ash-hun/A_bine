import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getDatabase, ref, set, child, update, remove, onValue, get } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyBpP2Cu36PXD-Lx2hWqXIA8hPjoia9G35U",
    authDomain: "abine-demo.firebaseapp.com",
    databaseURL: "https://abine-demo-default-rtdb.firebaseio.com",
    projectId: "abine-demo",
    storageBucket: "abine-demo.appspot.com",
    messagingSenderId: "742372983941",
    appId: "1:742372983941:web:6530ebb21443a092d6d5ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

var temperature = document.getElementById("temperature");
var humidity = document.getElementById("humidity");

function read_humidity(){
    onValue(ref(db, "/humidity"), (snapshot)=>{
        const data = snapshot.val();
        console.log("Humidity Value : "+ data);
        humidity.innerText = data+"％";
    });
}

function read_temperature(){
    onValue(ref(db, "/temperature"), (snapshot)=>{
        const data = snapshot.val();
        console.log("temperature Value : "+ data);
        temperature.innerText = data+"℃";
    });
}

setInterval(read_temperature, 50);
setInterval(read_humidity, 50);