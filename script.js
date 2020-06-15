let total = 0; // for storing typed values
let buffer = "0"; // to keep values as strings
let previousOperator; // represents previous operator clicked

const screen = document.querySelector('.screen');
const values = document.querySelector('.calc-buttons');



loadEventListeners();

function loadEventListeners() {

    values.addEventListener('click', function(e) {
        returnOutput(e.target.innerText);
    });


}




//define event listeners functions

function returnOutput(value) {
  if (isNaN(value)) {
      symbols(value)
  } else {
     numbers(value) 
  } 
}

function symbols();
function numbers();