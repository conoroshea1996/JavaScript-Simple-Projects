function light(value) {
    let pic;
    const sound = new Audio();
    sound.src = 'sound.mp3';
    

    if(value == 0){
         pic = 'img/off.jpg';
         document.querySelector('body').style.background='black';
    }
    else{
         pic = 'img/on.jpg';
         document.querySelector('body').style.background='white';
    } 

    document.getElementById('bulb').src= pic;
}
