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


/*```````````````````````CART``````````````````````````*/

let cart = document.querySelector('.cart-img');


cart.addEventListener('click',function(){
   document.querySelector('.cart-desc').classList.toggle('active-cart');
});


/*``````````````COUNTER and CART-AMOUNT``````````````*/
let count = 0;
let quantity = document.querySelector('.count');

document.querySelector('.plus').addEventListener('click',function(){ 
  count ++;
  quantity.textContent = count;
  document.querySelector('.prod-quan-incart').textContent = count;
  document.querySelector('.total-amt').textContent = `$${count * 125}`;

});

document.querySelector('.minus').addEventListener('click',function(){
if(count>0) count--; 
else return
quantity.textContent = count;
document.querySelector('.prod-quan-incart').textContent = count;
document.querySelector('.total-amt').textContent = `$${count * 125}`;

});

