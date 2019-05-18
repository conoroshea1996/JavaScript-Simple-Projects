function scrollEffect() {
    const text = document.querySelector('.text');
    const img = document.querySelector('.img');
    let textPosition = text.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.3;

    if(textPosition < screenPosition){
        text.classList.add('text-appear');
        img.classList.add('slideIn');

    }
}

    window.addEventListener('scroll', scrollEffect);