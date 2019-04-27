const hexCodes = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const button = document.querySelector('.hexBtn');
const body = document.querySelector('body');
const hexDisplay = document.querySelector('.hexCode');

button.addEventListener('click',getHex);
function getHex() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random()*hexCodes.length);
        hexColor += hexCodes[random];
    } 
body.style.backgroundColor=hexColor;

hexDisplay.innerHTML = hexColor;
}

