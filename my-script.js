
var a = [];
var b = [];
var o = []; 
var e = [];
var stringA = [];
var stringB = [];
var answr = [];

//display 

function showMe() { 
    
    document.getElementById('screen').innerHTML = '0';

    if (o.length < 1) {
        document.getElementById('screen').innerHTML = a.join('');
        
    }
    else if (a.length >= 1 && b.length < 1) {
        document.getElementById('screen').innerHTML = o.join('')
    }
    else if ( o.length >= 1 ) {
        document.getElementById('screen').innerHTML = b.join('')
    }
    
}




// should i combine the three touch functions into one function? 
//will loop allow me to chain operations? recursive loop? 
//Event listner A
function touchA() { 
    document.getElementById("calcKey1").addEventListener( "click", function(){
    if ( o.length < 1) {
        a.push(1);
        console.log(a);
        showMe();
        
}})

document.getElementById("calcKey2").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(2);
    console.log(a);
    showMe();

   
}})

document.getElementById("calcKey3").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(3);
    console.log(a);
    showMe();
}})

document.getElementById("calcKey4").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(4);
    console.log(a);
    showMe();
}})

document.getElementById("calcKey5").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(5);
    console.log(a);
    showMe();
}})

document.getElementById("calcKey6").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(6);
    console.log(a);
    showMe();
}})

document.getElementById("calcKey7").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(7);
    console.log(a);
    showMe();

    
}})

document.getElementById("calcKey8").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(8);
    console.log(a);
    showMe();
}})

document.getElementById("calcKey9").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(9);
    console.log(a);
    showMe();

    
}})

document.getElementById("calcKey0").addEventListener( "click", function(){
    if ( o.length < 1) {
    a.push(0);
    console.log(a);
    showMe();

    
}})

}



//touchA();

// event listner o 
// store operators
function touchO() { 


//    a.push(1);
//})
document.getElementById("calcKeyPlus").addEventListener( "click", function(){
    if (a.length >= 1 && o.length < 1) {
    o.push('+');
    console.log(o);
    showMe();
   
}
else if (a.length >= 1 && o.length >= 1 ) {
    o.push('+');
    showMe();
    console.log(answr);
    console.log(stringA);
    console.log(o);



}})
document.getElementById("calcKeyMinus").addEventListener( "click", function(){
    if (a.length >= 1 && o.length < 1)  {
    o.push('-');
  console.log(o);
  showMe();
 
}
else if (a.length >= 1 && o.length >= 1 ) {
    o.push('-');
    showMe();
    console.log(o);
    console.log(answr);
    console.log(stringA)

}})
document.getElementById("calcKeyTimes").addEventListener( "click", function(){
    if (a.length >= 1 && o.length < 1) {
    o.push('*');
console.log(o);
showMe();

}
else if (a.length >= 1 && o.length >= 1 ) {
    o.push('*');
    showMe();
    console.log(o);
    console.log(answr);
    console.log(stringA);


}})
document.getElementById("calcKeyDivide").addEventListener( "click", function(){
    if (a.length >= 1 && o.length < 1)  { 
o.push('/');
console.log(o);
showMe();
console.log(o);


}
else if (a.length >= 1 && o.length >= 1 ) {
    o.push('/');
    showMe();
    console.log(o)
    console.log(answr);
    console.log(stringA)


}})
}

//Event Listener B
function touchB() { 
     
    document.getElementById("calcKey1").addEventListener( "click", function(){
        if (o.length >= 1){
        b.push(1);
        console.log(b);
        console.log(answr);
        showMe();
       
    }})
    
    document.getElementById("calcKey2").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(2);
        console.log(b);
        console.log(answr);
        showMe();
        

    }})
    
    document.getElementById("calcKey3").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(3);
        console.log(b);
        console.log(answr);
        showMe();
       

    }})
    
    document.getElementById("calcKey4").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(4);
        console.log(b);
        console.log(answr);
        showMe();
      

    }})
    document.getElementById("calcKey5").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(5);
        console.log(b);
        console.log(answr);
        showMe();
    }})
    
    document.getElementById("calcKey6").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(6);
        console.log(b);
        console.log(answr);
        showMe();

    }})
    document.getElementById("calcKey7").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(7);
        console.log(b);
        showMe();

    }})

    document.getElementById("calcKey8").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(8);
        console.log(b);
        console.log(answr);
        showMe();

    }})
    
    document.getElementById("calcKey9").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(9);
        console.log(b);
        console.log(answr);
        showMe(); 

    }})

    document.getElementById("calcKey0").addEventListener( "click", function(){
        if (o.length >= 1) {
        b.push(0);
        console.log(b);
        console.log(answr);
        showMe();

    }})
    } 

function operator() {                                               //does not activate touchA once answr is populated
    document.querySelectorAll('.op').forEach( item => { 
        item.addEventListener('click', event => {
    
   if ( b.length > 0 && o == "+" || b.length > 0 && o[1] == "+") { 
    stringA.push(a.join(''));
   console.log(stringA);
   stringB.push(b.join(''));
   console.log(stringB);
    answr.splice(0, answr.length, ((parseInt(stringA,10)) + (parseInt(stringB, 10)))); 
    stringA.splice(0, stringA.length, ...answr);
    stringB.splice(0, stringB.length);
    b.splice(0, b.length);
    console.log(a);
    console.log(answr)
    console.log(b);
    console.log(o);

    document.getElementById('screen').innerHTML = answr;

}
   if ( b.length > 0 && o == "-" || b.length > 0 && o[1] == "-") {

    stringA.push(a.join(''));
   console.log(stringA);
   stringB.push(b.join(''));
   console.log(stringB);
    answr.splice(0, answr.length, ((parseInt(stringA,10)) - (parseInt(stringB, 10)))); 
    stringA.splice(0, stringA.length, ...answr);
    stringB.splice(0, stringB.length);
    b.splice(0, b.length);
    console.log(a);
    console.log(answr)
    console.log(b);
    console.log(o);

    document.getElementById('screen').innerHTML = answr;

}                  // stringA and stringB not clearing when different operator is used
                // operator is switching to next operator key before the first stored operator can perform its operation 
                // ex 3 + 3 - 2 = -2


   if ( b.length > 0 && o[0] == "*" || b.length > 0 && o[1] == "*") {
    stringA.push(a.join(''));
   console.log(stringA);
   stringB.push(b.join(''));
   console.log(stringB);
    answr.splice(0, answr.length, ((parseInt(stringA,10)) * (parseInt(stringB, 10)))); // string keeps repeating so answer does nto change from first operation
    a.splice(0, a.length, ...answr)
    stringA.splice(0, stringA.length, ...answr)
    stringB.splice(0, stringB.length);
    b.splice(0, b.length);
    console.log(a);
    console.log(answr)
    console.log(b);
    console.log(o);

    document.getElementById('screen').innerHTML = answr;


}

   if ( b.length > 0 && o == "/" || b.length > 0 && o[1] == "/") { 
    stringA.push(a.join(''));
   console.log(stringA);
   stringB.push(b.join(''));
   console.log(stringB);
    answr.splice(0, answr.length, ((parseInt(stringA,10)) / (parseInt(stringB, 10)))); 
    stringA.splice(0, stringA.length, ...answr);
    stringB.splice(0, stringB.length);
    b.splice(0, b.length);
    console.log(a);
    console.log(answr)
    console.log(b);
    console.log(o);

    document.getElementById('screen').innerHTML = answr;

}})
    })
}

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