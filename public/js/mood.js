<<<<<<< HEAD
// Color component
=======
// Color Component Controller
>>>>>>> 9ab912db2c3f3a710e371c146ed51303afbc4a0a
const red = document.querySelector("#color_11");
const burgundi = document.querySelector("#color_12");
const pink = document.querySelector("#color_13");
const orange = document.querySelector("#color_14");
const yellow = document.querySelector("#color_15");
const green = document.querySelector("#color_16");
const skyblue = document.querySelector("#color_21");
const darkblue = document.querySelector("#color_22");
const lightPurple = document.querySelector("#color_23");
const purple = document.querySelector("#color_24");
const realPurple = document.querySelector("#color_25");
const white = document.querySelector("#color_26");

// Color background component
const CLOCKING = "clocking";
const circle_on = document.querySelector(".circle_on");
const circle_off = document.querySelector(".circle_off");
const circle_red = document.querySelector(".circle_red");
const circle_burgundi = document.querySelector(".circle_burgundi");
const circle_pink = document.querySelector(".circle_pink");
const circle_orange = document.querySelector(".circle_orange");
const circle_yellow = document.querySelector(".circle_yellow");
const circle_green = document.querySelector(".circle_green");
const circle_skyblue = document.querySelector(".circle_skyblue");
const circle_darkblue = document.querySelector(".circle_darkblue");
const circle_lightPurple = document.querySelector(".circle_lightPurple");
const circle_purple = document.querySelector(".circle_purple");
const circle_realPurple = document.querySelector(".circle_realPurple");
let var_list = 
    [circle_on, 
        circle_off, 
        circle_red, 
        circle_burgundi, 
        circle_pink, 
        circle_orange, 
        circle_yellow,
        circle_green,
        circle_skyblue,
        circle_darkblue,
        circle_lightPurple,
        circle_purple,
        circle_realPurple];

function selectRED(){
    var_list.forEach(element => {
        if(element !== circle_red){
            element.classList.add(CLOCKING);
        }
        else{
            element.classList.remove(CLOCKING);
        }
    })
}

function selectBURGUNDI(){
    var_list.forEach(element => {
        if(element !== circle_burgundi){
            element.classList.add(CLOCKING);
        }
        else{
            element.classList.remove(CLOCKING);
        }
    })
}

function selectPINK(){
    var_list.forEach(element => {
        if(element !== circle_pink){
            element.classList.add(CLOCKING);
        }
        else{
            element.classList.remove(CLOCKING);
        }
    })
}

function selectORANGE(){
    var_list.forEach(element => {
        if(element !== circle_orange){
            element.classList.add(CLOCKING);
        }
        else{
            element.classList.remove(CLOCKING);
        }
    })
}

function selectYELLOW(){
    var_list.forEach(element => {
        if(element !== circle_yellow){
            element.classList.add(CLOCKING);
        }
        else{
            element.classList.remove(CLOCKING);
        }
    })
}

function selectGREEN(){
    var_list.forEach(element => {
        if(element !== circle_green){
            element.classList.add(CLOCKING);
        }
        else{
            element.classList.remove(CLOCKING);
        }
    })
}

function selectSKYBLUE(){
    var_list.forEach(element => {
        if(element !== circle_skyblue){
            element.classList.add(CLOCKING);
        }
        else{
            element.classList.remove(CLOCKING);
        }
    })
}

function selectDARKBLUE(){
    var_list.forEach(element => {
        if(element !== circle_darkblue){
            element.classList.add(CLOCKING);
        }
        else{
            element.classList.remove(CLOCKING);
        }
    })
}

function selectLIGHTPURPLE(){
    var_list.forEach(element => {
        if(element !== circle_lightPurple){
            element.classList.add(CLOCKING);
        }
        else{
            element.classList.remove(CLOCKING);
        }
    })
}

function selectPURPLE(){
    var_list.forEach(element => {
        if(element !== circle_purple){
            element.classList.add(CLOCKING);
        }
        else{
            element.classList.remove(CLOCKING);
        }
    })
}

function selectREALPURPLE(){
    var_list.forEach(element => {
        if(element !== circle_realPurple){
            element.classList.add(CLOCKING);
        }
        else{
            element.classList.remove(CLOCKING);
        }
    })
}

function selectWHITE(){
    var_list.forEach(element => {
        if(element !== circle_on){
            element.classList.add(CLOCKING);
        }
        else{
            element.classList.remove(CLOCKING);
        }
    })
}

function moodTurnON(){
    var_list.forEach(element => {
        if(element === circle_off){
            element.classList.add(CLOCKING);
        }
        else if(element === circle_on){
            element.classList.remove(CLOCKING);
        }
        else{
            element.classList.add(CLOCKING);
        }
    })
}

function moodTurnOFF(){
    var_list.forEach(element => {
        if(element === circle_on){
            element.classList.add(CLOCKING);
        }
        else if(element === circle_off){
            element.classList.remove(CLOCKING);
        }
        else{
            element.classList.add(CLOCKING);
        }
    })
}

circle_off.addEventListener("click", moodTurnON);
circle_on.addEventListener("click", moodTurnOFF);
circle_red.addEventListener("click", moodTurnOFF);
circle_burgundi.addEventListener("click", moodTurnOFF);
circle_pink.addEventListener("click", moodTurnOFF);
circle_orange.addEventListener("click", moodTurnOFF);
circle_yellow.addEventListener("click", moodTurnOFF);
circle_green.addEventListener("click", moodTurnOFF);
circle_skyblue.addEventListener("click", moodTurnOFF);
circle_darkblue.addEventListener("click", moodTurnOFF);
circle_lightPurple.addEventListener("click", moodTurnOFF);
circle_purple.addEventListener("click", moodTurnOFF);
circle_realPurple.addEventListener("click", moodTurnOFF);
red.addEventListener("click", selectRED);
burgundi.addEventListener("click", selectBURGUNDI);
pink.addEventListener("click", selectPINK);
orange.addEventListener("click", selectORANGE);
yellow.addEventListener("click", selectYELLOW);
green.addEventListener("click", selectGREEN);
skyblue.addEventListener("click", selectSKYBLUE);
darkblue.addEventListener("click", selectDARKBLUE);
lightPurple.addEventListener("click", selectLIGHTPURPLE);
purple.addEventListener("click", selectPURPLE);
realPurple.addEventListener("click", selectREALPURPLE);
white.addEventListener("click", selectWHITE);