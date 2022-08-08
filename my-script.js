
var a = [];
var b = [];
var o = []; 
var e = [];
var stringA = [];
var stringB = [];
var answr = [];

//display 

function showMe() { 
    if (o. length < 1) {
        document.getElementById('screen').innerHTML = a.join('');
    }
    else if (a.length >= 1 && o.length == 1) {
        document.getElementById('screen').innerHTML = o.join('')
    }
    else if ( o. length >= 1 ) {
        document.getElementById('screen').innerHTML = b.join('')
    }
}





//Event listner A
function touchA() { 
    document.getElementById("calcKey1").addEventListener( "click", function(){
    if ( o.length < 1) {
        a.push(1);
        console.log(a);
        
}})

document.getElementById("calcKey2").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(2);
    console.log(a);

   
}})

document.getElementById("calcKey3").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(3);
    console.log(a);

}})

document.getElementById("calcKey4").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(4);
    console.log(a);

}})

document.getElementById("calcKey5").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(5);
    console.log(a);

}})

document.getElementById("calcKey6").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(6);
    console.log(a);

}})

document.getElementById("calcKey7").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(7);
    console.log(a);

    
}})

document.getElementById("calcKey8").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(8);
    console.log(a);

}})

document.getElementById("calcKey9").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(9);
    console.log(a);

    
}})

document.getElementById("calcKey0").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(0);
    console.log(a);

    
}})

}



//touchA();

// event listner o 
// store operators
function touchO() { 


//    a.push(1);
//})
document.getElementById("calcKeyPlus").addEventListener( "click", function(){
    if (a.length >= 1) {
    o.push('+');
    console.log(o);
   
}})
document.getElementById("calcKeyMinus").addEventListener( "click", function(){
    if (a.length >= 1)  {
    o.push('-');
  console.log(o);
 
}})
document.getElementById("calcKeyTimes").addEventListener( "click", function(){
    if (a.length >= 1) {
    o.push('*');
console.log(o);

}})
document.getElementById("calcKeyDivide").addEventListener( "click", function(){
    if (a.length >= 1)  { o.push('/');
console.log(o);

}})
}

//Event Listener B
function touchB() { 
     
    document.getElementById("calcKey1").addEventListener( "click", function(){
        if (o.length >= 1){
        b.push(1);
        console.log(b);
       
    }})
    
    document.getElementById("calcKey2").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(2);
        console.log(b);
        

    }})
    
    document.getElementById("calcKey3").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(3);
        console.log(b);
       

    }})
    
    document.getElementById("calcKey4").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(4);
        console.log(b);
      

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
        

    }})
    document.getElementById("calcKey7").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(7);
        console.log(b);
        

    }})

    document.getElementById("calcKey8").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(8);
        console.log(b);
        

    }})
    
    document.getElementById("calcKey9").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(9);
        console.log(b);
        

    }})

    document.getElementById("calcKey0").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(0);
        console.log(b);
        

    }})
    } 

function operator() { 
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

showMe();
touchA();
touchO();
touchB();
operator();

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