const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.lists');
    const navItems = document.querySelectorAll('.lists li');
   
    burger.addEventListener('click',()=>{
         //Toggle Nav
        nav.classList.toggle('nav-active');

         //animate Links
    navItems.forEach((item,index) =>{
        if(item.style.animation){
            item.style.animation ='';
        } else{
        item.style.animation = `listsFade 1s ease forwards ${index/5 +0.5}s`;
        }
        }); 
        //burger animation
        burger.classList.toggle('toggle');
    });

   
}
navSlide();


