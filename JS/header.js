const hamburger = document.querySelector('.hamburger');
const logo = document.querySelector('.logo');
const primaryNav = document.querySelector('.primary-nav');
const navItems = document.querySelector('.nav-items');
const cross = document.querySelector('.close-menu');

hamburger.addEventListener('click',function(){
    hamburger.classList.add('active');
    logo.classList.add('active');
    primaryNav.classList.add('active');
    navItems.classList.add('active');
    cross.classList.add('active');
    
});


cross.addEventListener('click',function(){
    hamburger.classList.remove('active');
    logo.classList.remove('active');
    primaryNav.classList.remove('active');
    navItems.classList.remove('active');
    cross.classList.remove('active');
    
});