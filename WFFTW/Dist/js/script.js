// nvbar-fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if(window.scrollY > fixednav) {
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    }
}

// Burger
const burger = document.querySelector('#burger');
const navMenu =  document.querySelector('#nav-menu');

burger.addEventListener('click', function(){
    burger.classList.toggle('burger-active');
    navMenu.classList.toggle('hidden');
})