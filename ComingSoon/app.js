const counter = document.querySelector('.countdown');

//Launch Date 
const LaunchDate = new Date('Dec 19, 2019 13:00:00').getTime();  

const interval = setInterval( function() {
 // todays date and Time 
 const now = new Date().getTime();

 const toLaunch = LaunchDate - now;

//Time Calculations
const days = Math.floor(toLaunch / (1000 * 60 * 60 * 24))
const hours = Math.floor( (toLaunch % (1000* 60 * 60 *24)) / (1000* 60 *60));
const mins = Math.floor( (toLaunch % (1000* 60 * 60)) / (1000* 60));
const seconds = Math.floor( (toLaunch % (1000* 60)) / (1000));

//Display Result 
counter.innerHTML = `
 <div><span>Days</span>${days} </div>
 <div><span>Hours</span>${hours}</div>
 <div><span>Minutes</span>${mins} </div>
 <div><span>Seconds</span>${seconds} </div>
`;

// if launch date passes
if (toLaunch < 0){
    clearInterval(interval);

    counter.style.color = 'rgb(202,23,21)';
    counter.innerHTML = `We lauched Check Us Out`
}
 
},1000)
