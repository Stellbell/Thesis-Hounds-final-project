const oneBtn = 
document.querySelector('#begButt');
console.log(oneBtn);

const twoBtn = 
document.querySelector('#butt2');
console.log(twoBtn);

const threeBtn =
document.querySelector('#butt3');
console.log(threeBtn);

const boxeS = document.querySelector('#startspin');
console.log(boxeS)

const removeImg = 
document.querySelectorAll('img#start.boxes');
console.log(removeImg);

const show1 = document.querySelectorAll('div.box');
console.log(show1)

const book1 = document.querySelector('#biteButt');
console.log(book1)
const book2 = document.querySelector('#bite2');
const book3 = document.querySelector('#bite3');
const show10 = document.querySelector('#Booking_form');
console.log(show10)




//const beginning = document.querySelector('#begBut');
//console.log(beginning)
//function popBox() {
 //   alert("I am an alert box!");
//  }
 // beginning.addEventListener('mouseover', popBox);

 //const swap = document.querySelector('#start');
 //console.log(swap)
 function spiN() {
    boxeS.classList.add('on');
 }


function switcH() {
    //const moveIT = show1.style.display = 'block';
    document.getElementById("sox").style.display = 'block';
    
    
  }
  
function switcH2() {
    document.getElementById("circle2").style.display = 'block';
}
function switcH3() {
    document.getElementById("circle3").style.display = 'block';
}

function booking1 () {
 document.getElementById("Booking_form").style.display = 'block';

}


  oneBtn.addEventListener('click', switcH);
  //oneBtn.addEventListener('click', spiN);
  twoBtn.addEventListener('click', switcH2);
  //twoBtn.addEventListener('click', spiN);
  threeBtn.addEventListener('click', switcH3);
  threeBtn.addEventListener('click', spiN);

  book1.addEventListener('click', booking1);
  book2.addEventListener('click', booking1);
  book3.addEventListener('click', booking1);

  
 const cross = document.querySelector('#menu-close');
 console.log(cross);

  
  function close () {
   document.getElementById("Booking_form").style.display = 'none';
  }

  
  
  //cross.addEventListener('click', close);*/
  


// alert('end');

let namE = document.getElementById("name");
console.log(namE);

let bookinG = document.getElementById("Booking_form");



bookinG.addEventListener("submit", (e) => {
  e.preventDefault();
  
  
});

  let username = document.getElementById("name");
  let emaiL = document.getElementById("email");

   
  
  
 

  








 
