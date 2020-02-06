const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#previous');
const auto = true;
const interval = 5000; // interval za slider 5000 ms
let slideInterval;


// dve metode netx i previous

const nextSlide = () => {
    // hvatamo klasu current
    const current = document.querySelector('.current');  
    // sklanjamo current klasu 
    current.classList.remove('current');
    // provjeravani da li iduci sibling element ima klasu slide i u slucaju da ima dodjelicemo mu klasu current
    if (current.nextElementSibling){
        // dodajemo curent
        current.nextElementSibling.classList.add('current');
    }else{
        //ako smo na zadnjem divu i nema iduceg sibling elementa sa klasom current onda moramo vratiti current na prvi element
        // posto smo uzeli sve slides preko querySelectorAll-a imamo ih u node listi sto znaci da sa slides[0], index 0 oznacava prvi element u node listi i samo na njega opet dodamo klasu current
        slides[0].classList.add('current'); 
     }
     //opet nakon sto postavimo current na prvi element moramo smaknuti curent, samo da bi slider izgledao dobro ovaj put se klasa oduzima sa setTimeout funkcijom
     setTimeout(() => current.classList.remove('current')); 
};


// isti su komentari za sve samo nije sljedeci div neko je prethodni sa klasom slides
const previousSlide = () => {
    // hvatamo klasu current
    const current = document.querySelector('.current');  
    // sklanjamo current klasu 
    current.classList.remove('current');
    // provjeravani da li iduci sibling element ima klasu slide i u slucaju da ima dodjelicemo mu klasu current
    if(current.previousElementSibling){
        // dodajemo curent
        current.previousElementSibling.classList.add('current');
    }else{
        //ako smo na zadnjem divu i nema iduceg sibling elementa sa klasom current onda moramo vratiti current na prvi element
        //ukupan slides length -1 nam daje zadnji div
        slides[slides.length - 1].classList.add('current'); 
     }
     //opet nakon sto postavimo current na prvi element moramo smaknuti curent, samo da bi slider izgledao dobro ovaj put se klasa oduzima sa setTimeout funkcijom
     setTimeout(() => current.classList.remove('current')); 
     
}


//button events  POZIVANJE ZA ES6 sintaksu 
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


// auto slide

//provjeravamo vrijednost auto
if(auto){
    // ako je auto true prebaci na sljedeci slide u zadanom intervalu (Definisano u const intervalu)
    //slideInterval se koristi za incijalizaciju
    // setInterval funkcija u JS za stavljanje intervala u koju prosljedjujemo funkciju i interval 
    slideInterval = setInterval(nextSlide, interval);
}