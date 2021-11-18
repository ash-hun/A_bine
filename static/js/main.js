const menuTrigger = document.querySelector('.menu-trigger');
const menuWrap = document.querySelector('#menuWrap');
const CLICKED_CLASS = "clicked";

function toggleStyle() {
    const hasClicked = menuWrap.classList.contains(CLICKED_CLASS);
    if(!hasClicked){
        menuWrap.classList.add(CLICKED_CLASS);
        // menuWrap.classList.add(isCLICKED);
        // menuWrap.classList.remove(isnotCLICKED);
    }
    else{
        menuWrap.classList.remove(CLICKED_CLASS);
        // menuWrap.classList.add(isnotCLICKED);
        // menuWrap.classList.remove(isCLICKED);        
    }
    // if (menuWrap.style.opacity = "0") {
    //     menuWrap.style.opacity = "1";
    // } else if (menuWrap.style.opacity = "1") {
    //     menuWrap.style.opacity = "0";
    // }
}

menuTrigger.addEventListener('click', (event) => {
    event
        .currentTarget
        .classList
        .toggle('active-1');
});

menuTrigger.addEventListener(('click'), toggleStyle);