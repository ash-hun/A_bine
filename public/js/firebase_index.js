import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
            import { getDatabase, ref, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
            
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

            var btn1 = document.getElementById("testBtn1");
            var btn0 = document.getElementById("testBtn0");
            var bigON = document.getElementById("btn_5x5ON");
            var bigOFF = document.getElementById("btn_5x5OFF");

            function big_write_ON(){
                update(ref(db, "/"), {
                    BIGGER_ONE:1
                })
                .then(()=>{
                    alert("data stored success");
                })
                .catch((error)=>{
                    alert("unsuccessful, error"+error);
                });
            }

            function big_write_OFF(){
                update(ref(db, "/"), {
                    BIGGER_ONE:0
                })
                .then(()=>{
                    alert("data stored success");
                })
                .catch((error)=>{
                    alert("unsuccessful, error"+error);
                });
            }

            function data_write_1(){
                update(ref(db, "/"), {
                    smarthome_LED:1,
                    smarthome_R:248,
                    smarthome_G:182,
                    smarthome_B:45
                })
                .then(()=>{
                    alert("data stored success");
                })
                .catch((error)=>{
                    alert("unsuccessful, error"+error);
                });
            }

            function data_write_0(){
                update(ref(db, "/"), {
                    smarthome_LED:1,
                    smarthome_R:53,
                    smarthome_G:122,
                    smarthome_B:191
                })
                .then(()=>{
                    alert("data stored success");
                })
                .catch((error)=>{
                    alert("unsuccessful, error"+error);
                });
            }

            btn1.addEventListener('click', data_write_1);
            btn0.addEventListener('click', data_write_0);
            bigON.addEventListener('click', big_write_ON);
            bigOFF.addEventListener('click', big_write_OFF);