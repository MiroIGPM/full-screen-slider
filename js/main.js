const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#previous');
const auto = true;
const interval = 5000; // interval za slider 5000 ms
let slideInterval;



const nextSlide = () => {

    const current = document.querySelector('.current');  

    current.classList.remove('current');

    if (current.nextElementSibling){

        current.nextElementSibling.classList.add('current');
    }else{
    
        slides[0].classList.add('current'); 
     }
     
     setTimeout(() => current.classList.remove('current')); 
};



const previousSlide = () => {

    const current = document.querySelector('.current');  

    current.classList.remove('current');

    if(current.previousElementSibling){

        current.previousElementSibling.classList.add('current');
    }else{

        slides[slides.length - 1].classList.add('current'); 
     }
 
     setTimeout(() => current.classList.remove('current')); 
     
}



next.addEventListener('click', e => {
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, interval);
    }
});

prev.addEventListener('click', e =>{
    previousSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, interval);
    }
});




if(auto){

    slideInterval = setInterval(nextSlide, interval);
}
