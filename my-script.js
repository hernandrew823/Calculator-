
var a = [];
var b = [];
var o = []; 
var e = [];
var stringA = [];
var stringB = [];
var answr = [];

//display 





//Event listner A
function touchA() { 
    document.getElementById("calcKey1").addEventListener( "click", function(){
    if ( o.length < 1) {
        a.push(1);
        document.getElementById('screen').innerHTML = a.join('');
}})

document.getElementById("calcKey2").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(2);
    document.getElementById('screen').innerHTML = a.join('');
}})

document.getElementById("calcKey3").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(3);
    document.getElementById('screen').innerHTML = a.join('');
}})

document.getElementById("calcKey4").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(4);
    document.getElementById('screen').innerHTML = a.join('');
}})

document.getElementById("calcKey5").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(5);
    document.getElementById('screen').innerHTML = a.join('');
}})

document.getElementById("calcKey6").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(6);
    document.getElementById('screen').innerHTML = a.join('');
}})

document.getElementById("calcKey7").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(7);
    document.getElementById('screen').innerHTML = a.join('');
}})

document.getElementById("calcKey8").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(8);
    document.getElementById('screen').innerHTML = a.join('');
}})

document.getElementById("calcKey9").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(9);
    document.getElementById('screen').innerHTML = a.join('');
}})

document.getElementById("calcKey0").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(0);
    document.getElementById('screen').innerHTML = a.join('');
}})

}



//touchA();

// event listner o 

function touchO() { 


//    a.push(1);
//})
document.getElementById("calcKeyPlus").addEventListener( "click", function(){
    if (a.length >= 1) {
    o.push('+');
    console.log(o);
    document.getElementById('screen').innerHTML = o.join('')
}})
document.getElementById("calcKeyMinus").addEventListener( "click", function(){
    if (a.length >= 1)  {
    o.push('-');
  console.log(o);
  document.getElementById('screen').innerHTML = o.join('')
}})
document.getElementById("calcKeyTimes").addEventListener( "click", function(){
    if (a.length >= 1) {
    o.push('*');
console.log(o);
document.getElementById('screen').innerHTML = o.join('')
}})
document.getElementById("calcKeyDivide").addEventListener( "click", function(){
    if (a.length >= 1)  { o.push('/');
console.log(o);
document.getElementById('screen').innerHTML = o.join('')
}})
}

//Event Listener B
function touchB() { 
     
    document.getElementById("calcKey1").addEventListener( "click", function(){
        if (o.length >= 1){
        b.push(1);
        console.log(b);
        document.getElementById('screen').innerHTML = b.join('')
    }})
    
    document.getElementById("calcKey2").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(2);
        console.log(b);
        document.getElementById('screen').innerHTML = b.join('')

    }})
    
    document.getElementById("calcKey3").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(3);
        console.log(b);
        document.getElementById('screen').innerHTML = b.join('')

    }})
    
    document.getElementById("calcKey4").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(4);
        console.log(b);
        document.getElementById('screen').innerHTML = b.join('')

    }})
    document.getElementById("calcKey5").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(5);
        console.log(b);
    }})
    
    document.getElementById("calcKey6").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(6);
        console.log(b);
        document.getElementById('screen').innerHTML = b.join('')

    }})
    document.getElementById("calcKey7").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(7);
        console.log(b);
        document.getElementById('screen').innerHTML = b.join('')

    }})

    document.getElementById("calcKey8").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(8);
        console.log(b);
        document.getElementById('screen').innerHTML = b.join('')

    }})
    
    document.getElementById("calcKey9").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(9);
        console.log(b);
        document.getElementById('screen').innerHTML = b.join('')

    }})

    document.getElementById("calcKey0").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(0);
        console.log(b);
        document.getElementById('screen').innerHTML = b.join('')

    }})
    } 

function touchE() { 
    document.getElementById('calcKeyEqual').addEventListener( "click", function(){
   e.push("=");
   if ( b.length > 0 && o == "+") { 
    stringA.push(a.join(''));
   console.log(stringA);
   stringB.push(b.join(''));
   console.log(stringB);
    answr.push((parseInt(stringA,10)) + (parseInt(stringB, 10))); 

    console.log(answr); 
    document.getElementById('screen').innerHTML = answr;

}
   if ( b.length > 0 && o == "-") {

    stringA.push(a.join(''));
   console.log(stringA);
   stringB.push(b.join(''));
   console.log(stringB);
    answr.push((parseInt(stringA,10)) - (parseInt(stringB, 10))); 

    console.log(answr); 
    document.getElementById('screen').innerHTML = answr;

}


   if ( b.length > 0 && o == "*") {
    stringA.push(a.join(''));
   console.log(stringA);
   stringB.push(b.join(''));
   console.log(stringB);
    answr.push((parseInt(stringA,10)) * (parseInt(stringB, 10))); 

    console.log(answr); 
    document.getElementById('screen').innerHTML = answr;


}

   if ( b.length > 0 && o == "/") { 
    stringA.push(a.join(''));
   console.log(stringA);
   stringB.push(b.join(''));
   console.log(stringB);
    answr.push((parseInt(stringA,10)) / (parseInt(stringB, 10))); 

    console.log(answr); 
    document.getElementById('screen').innerHTML = answr;

}})
}


touchA();
touchO();
touchB();
touchE();

//})
//document.getElementById().addEventListener( "click", function(){
  //  a.push(1);
//})
//document.getElementById().addEventListener( "click", function(){
  //  a.push(1);
//})
//document.getElementById().addEventListener( "click", function(){
  //  a.push(1);
//})
//document.getElementById().addEventListener( "click", function(){
  //  a.push(1);
//})







//function operate {
 
//}

//function multiply {

//}

//function divide { 

//}

//function add {

//}

//function subtract {

//}