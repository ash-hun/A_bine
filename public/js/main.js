const menuTrigger = document.querySelector('.menu-trigger');
const menuWrap = document.querySelector('#menuWrap');
const CLICKED_CLASS = "clicked";

function toggleStyle() {
    const hasClicked = menuWrap.classList.contains(CLICKED_CLASS);
    if(!hasClicked){
        menuWrap.classList.add(CLICKED_CLASS);
        menuWrap.style.zIndex="-400";
    }
    else{
        menuWrap.classList.remove(CLICKED_CLASS);
        menuWrap.style.zIndex="3";
    }
}

menuTrigger.addEventListener('click', (event) => {
    event
        .currentTarget
        .classList
        .toggle('active-1');
});

menuTrigger.addEventListener(('click'), toggleStyle);