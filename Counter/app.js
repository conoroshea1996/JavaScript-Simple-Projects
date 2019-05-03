let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCount');
const lowerCount = document.querySelector('#lowerCount');

let count = 0;



addCount.addEventListener('click',addingCount);
lowerCount.addEventListener('click',loweringCount);

function addingCount (){
    count++;
    counter.innerHTML = count;
    if(count > 0){
        counter.style.color = "green";
    } else if(count === 0){
        counter.style.color = "white";
    }
    counter.animate([{opacity:'0.2'},{opacity:'0.4'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
}
function loweringCount() {
    count --;
    counter.innerHTML = count;
    if(count< 0){
        counter.style.color='red';
    }else if(count === 0){
        counter.style.color = "white";
    }
    counter.animate([{opacity:'0.2'},{opacity:'0.4'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
  

}

