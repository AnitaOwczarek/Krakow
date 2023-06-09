const hamburgerIcons = document.querySelector('.fa-solid');
const ulMenuItems = document.querySelector('.menu-items');
const containerNav = document.querySelector('.container-nav');
const icons = document.querySelectorAll('.iconNav');
const nav = document.querySelector('.menu');
const body = document.querySelector('body');
const iconNext1 = document.querySelector('.iconNext1');
const iconNext2 = document.querySelector('.iconNext2');
const imgHotel1 = document.querySelector('.showHotel1');
const imgHotel2 = document.querySelector('.showHotel2');
const imgHotel3 = document.querySelector('.showHotel3');
const imgHotel4 = document.querySelector('.showHotel4');
const menuLink = document.querySelectorAll('.menu-link');


var hotelStatus = 2;
var hotelTimer = 4000;

function deleteMenuViwe(){
    nav.classList.remove('menuHamburger');
    nav.classList.remove('menuHamburgerHeight');
    containerNav.classList.add('elementNavVisibility');
    icons.forEach(icon => {
        icon.classList.toggle('elementVisibility');
    });
    ulMenuItems.classList.add('elementVisibility');
    body.classList.remove('windowSrollY');

}

function changeHotelRight(){
    if(imgHotel1.classList.contains('zIndeksHotel')){
        imgHotel1.classList.remove('zIndeksHotel');
        imgHotel2.classList.add('zIndeksHotel');     
    }
    else if(imgHotel2.classList.contains('zIndeksHotel')){
        imgHotel2.classList.remove('zIndeksHotel');
        imgHotel3.classList.add('zIndeksHotel');
    }
    else if(imgHotel3.classList.contains('zIndeksHotel')){
        imgHotel3.classList.remove('zIndeksHotel');
        imgHotel4.classList.add('zIndeksHotel');
    }
    else if(imgHotel4.classList.contains('zIndeksHotel')){
        imgHotel4.classList.remove('zIndeksHotel');
        imgHotel1.classList.add('zIndeksHotel');
    }
    
}
function changeHotelLeft(){
    if(imgHotel1.classList.contains('zIndeksHotel')){
        imgHotel1.classList.remove('zIndeksHotel');
        imgHotel4.classList.add('zIndeksHotel');     
    }
    else if(imgHotel2.classList.contains('zIndeksHotel')){
        imgHotel2.classList.remove('zIndeksHotel');
        imgHotel1.classList.add('zIndeksHotel');
    }
    else if(imgHotel3.classList.contains('zIndeksHotel')){
        imgHotel3.classList.remove('zIndeksHotel');
        imgHotel2.classList.add('zIndeksHotel');
    }
    else if(imgHotel4.classList.contains('zIndeksHotel')){
        imgHotel4.classList.remove('zIndeksHotel');
        imgHotel3.classList.add('zIndeksHotel');
    }
    
}



function changeMenuBackground(){
    if(window.scrollY > 50){
        nav.classList.add('menuHamburger')
    }else{
        nav.classList.remove('menuHamburger');
    }
}

function showHamburgerMenu() {
    if(window.scrollY < 50){
        nav.classList.toggle('menuHamburger'); 
    } 
    nav.classList.toggle('menuHamburgerHeight');
    body.classList.toggle('windowSrollY');
    ulMenuItems.classList.toggle('elementVisibility');
    containerNav.classList.toggle('elementNavVisibility');
    icons.forEach(icon => {
        icon.classList.toggle('elementVisibility');
    });
    
}

menuLink.forEach(link => {
    link.addEventListener('click', deleteMenuViwe)
});
iconNext2.addEventListener('click', changeHotelRight);
iconNext1.addEventListener('click', changeHotelLeft)

icons.forEach(icon => {
    icon.addEventListener("click", showHamburgerMenu);
})

window.addEventListener('scroll', changeMenuBackground);

