//Initial Ratings 
const ratings={
    audi:4.5,
    bmw:4.5,
    toyota:4.0,
    smartcar:3.0,
    lexus:1.0,
}
//total stars
const starTotal =5;

// run getRatings when dom loads
document.addEventListener('DOMContentLoaded',getRatings);

//form Elements
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

//init product
let product;

let image = document.querySelector('.car-image');

//product select change
productSelect.addEventListener('change',(e)=>{
    product =e.target.value;
    image.src = `./img/${product}.jpg`;
    //enable rating control    
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
})
// rating control change 
ratingControl.addEventListener('blur',(e)=>{
    const rating = e.target.value;

    //check ratings under 5
    if(rating> 5){
        alert('rating must be between 1-5');
        return;
    }

    //change rating
    ratings[product]= rating;
    getRatings();
})
//get ratings
function getRatings() {
    for(let rating in ratings){
       //get percentage
       const StarPercentage = (ratings[rating] / starTotal)*100;
        
       //Round to nearestTen
       const StarPercentageRounded = `${Math.round (StarPercentage /10)*10}%`;

       // Set width of stars inner to percentage
       document.querySelector(`.${rating} .stars-inner`).style.width = StarPercentageRounded;
       
       // add number rating
       document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
    
}

