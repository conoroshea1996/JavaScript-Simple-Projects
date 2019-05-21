const month = document.querySelector('.Month');
const date = document.querySelector('.Date');

const img = document.querySelector('.img');


const monthList =["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"];


let DateNow = new Date();
let MonthNow = DateNow.getMonth();
let YearNow = DateNow.getFullYear();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayNow = DateNow.getDay();
const dateNow  = DateNow.getDate();

month.innerHTML = ` ${monthList[MonthNow]} , ${YearNow}`;
date.innerHTML = ` ${dateNow} , ${days[dayNow]}`

    
    img.style.backgroundImage = ` url(/imgs/img${MonthNow}.jpg)`;




const dates = document.querySelector('.date');

function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
       days.push(new Date(date));
       date.setDate(date.getDate() + 1);
    }
  
    console.log(days);
    

for(var x=1; x<days.length; x++){
    const div = document.createElement('div');
    div.className = 'number'
    div.innerHTML = [x];
    dates.append(div);

    if(dateNow == x){
        div.classList.add('active');
    }
}
}








getDaysInMonth(MonthNow,YearNow);
