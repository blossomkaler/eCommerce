/* const pictures = [
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
    target.classList.add('active-thumb');
  
  });
 */
  /*``````````````COUNTER`````````````````````````*/
  let count = 0;
  let quantity = document.querySelector('.count');

document.querySelector('.plus').addEventListener('click',function(){ 
    count ++;
    quantity.textContent = count;
  
});

 document.querySelector('.minus').addEventListener('click',function(){
  if(count>0) count--; 
  else return
  quantity.textContent = count;

 });