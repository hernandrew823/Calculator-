// Parent Element 
const space = document.createElement("div");
space.setAttribute("id", "calculator");
space.setAttribute("class", "container");
const getCalc = document.getElementById("calculator");
const getCont = document.querySelector(".container");

//Append Parent to Document
document.body.appendChild(space);

// create sub parent

const subSpace = document.createElement("div");
subSpace.setAttribute("id", "extraSpace");
subSpace.setAttribute("class", "subParent");
space.appendChild(subSpace);

//Create Display Children 
const display = document.createElement("div"); 
display.setAttribute("id", "showInput");
display.setAttribute("class", "inputDisplay");
space.appendChild(display);
const spacer = document.createElement("div");
spacer.setAttribute("id", "gapMaker" );
space.appendChild(spacer);
const spacer2 = document.createElement("div");
spacer2.setAttribute("id", "gapMaker2");
space.appendChild(spacer2);

//Draw Button Children
function makeRows(x, y) {
subSpace.style.setProperty('--grid-rows', x);
subSpace.style.setProperty('--grid-cols', y);

for ( let c = 0; c < ( x * y); c++) {
    const filling = document.createElement("div"); 
    filling.innerText = (9-c); 
subSpace.appendChild(filling).className = "button";
filling.setAttribute("id", "calcKey");


}


}

const plus = document.createElement("div");
plus.setAttribute("id", "addition");
space.appendChild(plus);

const minus = document.createElement("div");
minus.setAttribute("id", "subtraction");
space.appendChild(minus);

const times = document.createElement("div");
times.setAttribute("id", "multiplication");
space.appendChild(times);
 
const divide = document.createElement("div");
divide.setAttribute("id", "division"); 
space.appendChild(divide);




makeRows(3, 3);