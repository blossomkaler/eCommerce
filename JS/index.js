const pictures = [
    {imgSrc : "/images/image-product-1.jpg"},
    {imgSrc : "/images/image-product-2.jpg"},
    {imgSrc : "/images/image-product-3.jpg"},
    {imgSrc : "/images/image-product-4.jpg"}
];

mainImg = document.querySelector('#main-img');


document.addEventListener("click", function(e) {
    const target = e.target;
    const clickedElement = target.id ;
    const thumbnails = document.querySelectorAll('.thumbnail'); 
  
    if(clickedElement == 'thumbnail-1') n =0;
    else if(clickedElement == 'thumbnail-2') n =1;
    else if(clickedElement == 'thumbnail-3') n =2;
    else if(clickedElement == 'thumbnail-4') n =3;
    else return; 

    thumbnails.forEach(thumbnail => {
        if(thumbnail.classList.contains('active-thumb')) thumbnail.classList.remove('active-thumb');
      });

    document.querySelector('#main-img').src = pictures[n].imgSrc;
    document.querySelector('.lightbox #main-img').src = pictures[n].imgSrc;

    target.classList.add('active-thumb');
  
  
  });
 
/*``````````````````````LIGHT-BOX`````````````````````````*/
let lightBox = document.querySelector('.lightbox');
let crossLb =   document.querySelector('.close-lb');

 mainImg.addEventListener('click',function(){
  lightBox.classList.add('active-lightbox');
 });

crossLb.addEventListener('click',function(){
  lightBox.classList.remove('active-lightbox');  

 });


 
/*``````````````````SLIDER (MOBILE DESIGN)```````````````````*/

const prev = document.querySelector('.previous');
const next = document.querySelector('.next');
const slide = document.querySelector('.slide');
let counter = 0;

next.addEventListener('click',function(){
  counter++;
  if(counter>3) counter = 0 ;
  slide.src = pictures[counter].imgSrc;
}
);

prev.addEventListener('click',function(){
  counter--;
  if(counter == -1) counter = 3 ;
  slide.src = pictures[counter].imgSrc;

}
);