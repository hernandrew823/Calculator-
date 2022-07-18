// Parent Element 
const space = document.createElement("div");
space.setAttribute("id", "calculator");
space.setAttribute("class", "container");
const getCalc = document.getElementById("calculator");
const getCont = document.querySelector(".container");

//Append Parent to Document
document.body.appendChild(space);


//Create Display Children 
const display = document.createElement("div"); 
display.setAttribute("id", "showInput");
display.setAttribute("class", "inputDisplay")


//Draw Button Children
function makeRows(x, y) {
space.style.setProperty('--grid-rows', x);
space.style.setProperty('--grid-columns', y);

for ( let c = 0; c < ( x * y); c++) {
    const filling = document.createElement("div"); 
    filling.innerText = (c + 1); 
calculator.appendChild(filling).className = "button";
filling.setAttribute("id", "calcKey");


}


}

makeRows(4, 4);