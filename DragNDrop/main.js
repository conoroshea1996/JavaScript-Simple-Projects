const fill = document.querySelector('.fill');
const boxes = document.querySelectorAll('.empty');
const main = document.querySelector('.main');
main.style.transitionDuration = "1s"

//fill Listeners
fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);

//loop through boxes
for(const box of boxes){
    box.addEventListener('dragover',dragOver);
    box.addEventListener('dragenter',dragEnter);
    box.addEventListener('dragleave',dragLeave);
    box.addEventListener('drop',dragDrop);
}

//Drag Functions
function dragStart() {
    this.className += ' hold';
    setTimeout(()=> (this.className = 'invisible'),0);
    main.className += ' shadow';
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
 
  }
  function dragEnter(e) {
    e.preventDefault();
    this.className +=' hovered';
  
}
function dragLeave() {
    this.className = 'empty';

}
function dragDrop() {
  this.className = 'empty';
  this.append(fill);
  main.classList.remove('shadow');


}