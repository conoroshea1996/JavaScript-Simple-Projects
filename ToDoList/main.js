// storing data
const clear = document.querySelector('.clear');
const date = document.querySelector('#date');

const list = document.querySelector('#list');
const input = document.querySelector('#text');

const DoText = document.querySelector('.text');

const uncheck = "fa-circle";
const check = "fa-check-circle";

let Dolist = [];

let id = 0;
let lineTrough = 'opcatiy';

// insert the objecct into the list
function addToDo(toDo,id,done,trash) {
    if(trash){ return;}

    const Done = done ? check : uncheck;

    const line = done ? lineTrough : '' ;


const text = `<li class="item">
                    <i job="check" class="far ${Done}" id ="${id}"></i>
                    <p class="text ${line}">${toDo}</p>  
                    <i job="delete" class="fas fa-trash" id ="${id}"></i>
                </li>`;
list.insertAdjacentHTML("afterbegin",text);
}

const checkbox = document.querySelector('#checkbox');
const text = document.querySelector('.text');

function checkboxer(element) {
    element.classList.toggle(check);
    element.classList.toggle(uncheck); 
    element.parentNode.querySelector('.text').classList.toggle(lineTrough);
    Dolist[element.id].done = Dolist[element.id].done ? false : true;
}

function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    Dolist[element.id].trash = true;
}
    list.addEventListener('click',(event)=>{
        const element = event.target;
        
    const value = element.attributes.job.value;
        
    if(value == 'check'){
            checkboxer(element);
            
    } else if( value == 'delete'){
        removeToDo(element);
    }
})

input.addEventListener('keyup' ,function (e) {
    if(e.keyCode == 13){
        const toDo = input.value;

        if (toDo) {
            addToDo(toDo,id,false,false);
            Dolist.push({
                name:toDo,
                id:id,
                done:false,
                trash:false
            });
        }
        input.value = '';
        id++;
    } 
});


//to get the date 
let Today = new Date();
//get the month
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
let thismonth = Today.getMonth();
let month = months[thismonth];
//get day of the week
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let thisday = Today.getDay();
let day = weekdays[thisday];
//get date in month
const dates = Today.getDate();
date.innerHTML = `${day}, ${month} ${dates}`;



