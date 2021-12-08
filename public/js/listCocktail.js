const right_arrow_wrap = document.querySelector(".right_arrow");
const left_arrow_wrap = document.querySelector(".left_arrow");
const right_arrow = document.querySelector(".rightArrImg");
const left_arrow = document.querySelector(".leftArrImg");
const cocktail_first = document.querySelector("#cocktail_01");
const cocktail_second = document.querySelector("#cocktail_02");
const cocktail_secondPage_01 = document.querySelector("#cocktail_06");
const cocktail_secondPage_02 = document.querySelector("#cocktail_07");

function move_cocktail_nextLine(){
    cocktail_first.style.display="none";
    cocktail_second.style.display="none";
    cocktail_secondPage_01.style.display="";
    cocktail_secondPage_02.style.display="";
    left_arrow_wrap.style.opacity="1";
    right_arrow_wrap.style.opacity="0";
}

function move_cocktail_prevLine(){
    cocktail_first.style.display="";
    cocktail_second.style.display="";
    cocktail_secondPage_01.style.display="none";
    cocktail_secondPage_02.style.display="none";
    left_arrow_wrap.style.opacity="0";
    right_arrow_wrap.style.opacity="1";
}

right_arrow.addEventListener("click", move_cocktail_nextLine);
left_arrow.addEventListener("click", move_cocktail_prevLine);