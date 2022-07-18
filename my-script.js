// Parent Element 
const space = document.createElement("div");
space.setAttribute("id", "calculator");
space.setAttribute("class", "container");
const getCalc = document.getElementsById("calculator");
const getCont = document.querySelector(".container");

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
calculator.appendChild(filling).className = "button";
filling.setAttribute("id", "calcKey");


}


}