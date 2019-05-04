const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click',nextSlide);
prevBtn.addEventListener('click',prevSlide);

function nextSlide() {
    if(counter === 3){
        counter = 0;
    }
    container.animate([{opacity:'0.1'},{opacity:'0.5'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
    container.style.backgroundImage = `url(/img/image${counter}.jpg)`;
    counter ++;  
    console.log(counter);
    
}

function prevSlide() {
    if(counter === 0){
        counter = 3;
    }
    container.animate([{opacity:'0.1'},{opacity:'0.5'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});    
    container.style.backgroundImage = `url(/img/image${counter}.jpg)`;
    counter --;
    console.log(counter);
    
}