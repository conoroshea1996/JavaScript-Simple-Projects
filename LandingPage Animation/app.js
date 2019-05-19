const rows = document.querySelectorAll('.row');
const heading = document.querySelector('h1');
const section = document.querySelector('section');

const delay = 2000

const timing = time => new Promise(resolve => setTimeout(resolve,time));
const opacity = 0.3;

rows.forEach(function(row,delay) {
        timing(0).then(()=>{
                setTimeout( function() {
                    row.classList.add('color'); 
                },delay *100);  
            })

        timing(2000).then(()=>{
                setTimeout( function() {
                    row.style.opacity = opacity;
                    row.style.height ='90%' ;
                },delay *100);  
            })
        
        timing(2200).then(()=>{
            setTimeout( function() {
                heading.classList.add('show');
            });  
        })
});

heading.addEventListener('mouseover', function() {
    section.style.transform = "rotate(45deg) scale(3)";
})
heading.addEventListener('mouseout', function() {
    section.style.transform = "";
})








