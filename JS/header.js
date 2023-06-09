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
let cartDesc = document.querySelector('.cart-desc');

/* cart.addEventListener('mouseover',function(){
   document.querySelector('.cart-desc').classList.add('active-cart');
});

cart.addEventListener('mouseout',function(){
    document.querySelector('.cart-desc').classList.remove('active-cart');
 });
 */
cart.addEventListener('click',function(){
    cartDesc.classList.toggle('active-cart');
 });

 cartDesc.addEventListener('mouseover',function(){
    cartDesc.classList.add('active-cart');
 });

cartDesc.addEventListener('mouseout',function(){
    cartDesc.classList.remove('active-cart');
 });



/*``````````````COUNTER and CART-AMOUNT``````````````*/
let count = 0;
let quantity = document.querySelector('.count');
const cartNum = document.querySelector('.count-num');                      //NUMBER ON CART

document.querySelector('.plus').addEventListener('click',function(){ 
  count ++;

  cartNum.textContent = count;
  quantity.textContent = count;
  document.querySelector('.prod-quan-incart').textContent = count;
  document.querySelector('.total-amt').textContent = `$${count * 125}`;

});

document.querySelector('.minus').addEventListener('click',function(){
if(count>0) count--; 
else return;

if(count == 0) {
    filledCart.classList.remove('filled-active');
    emptyCart.classList.remove('filled-active');
    cartNum.classList.remove('active-num');
}

cartNum.textContent = count;
quantity.textContent = count;
document.querySelector('.prod-quan-incart').textContent = count;
document.querySelector('.total-amt').textContent = `$${count * 125}`;


});


/*````````````````````ADD TO CART BUTTON```````````````````````````*/

const cartBtn = document.querySelector('.cart-btn');
const emptyCart = document.querySelector('.empty-cart');
const filledCart = document.querySelector('.filled-cart');
const deleteBtn = document.querySelector('.delete-icon');

cartBtn.addEventListener('click',function(){
    if(quantity.textContent == 0) {
        filledCart.classList.remove('filled-active');
        emptyCart.classList.remove('filled-active');
        cartNum.classList.remove('active-num');

    }

    else if(quantity.textContent>0) {
        filledCart.classList.add('filled-active');
        emptyCart.classList.add('filled-active');
        cartNum.classList.add('active-num');
    }
    else return;
}); 

deleteBtn.addEventListener('click',function(){

    filledCart.classList.remove('filled-active');
    emptyCart.classList.remove('filled-active');
    cartNum.classList.remove('active-num');

}); 


