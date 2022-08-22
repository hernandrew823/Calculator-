
var exOne = [];
var a1 = [];
var o1 = [];
var b1 = [];
var exTwo = [];
var a2 = [];
var o2 = [];
var b2 = [];
var cl = [];
var pO1 = [];
var eq1 = [];
var eq2 = [];
var placeHolder = ['0'];
var dEx = [];
var dEx2 = [];



//display 

function showMe() {
    if (a1.length < 1 && a2.length < 1) {
        document.getElementById('screen').innerHTML = '0';
    }

    else if (a1.length >= 1 && b1.length < 1  || a2.length >= 1 && o2.length !== 1 )       //order code is LAID OUT is ORDER CODE FOLLOWS // add "&& b1.length" to get the code which shows b1, to work
                                                                                        // had trouble displaying expressiosn because calc displayed empty b1 before the relevant expression 
    {document.getElementById('screen').innerHTML = dEx.join(''); ///// alternate between "dEx" and "dEx.splice(0, 1)" is the splicekeeping display consistently show one variable at a time?
    console.log(dEx);                                                  /// splice is causing dEx to clean itself?
console.log}

else if (exOne.length >= 1 && b2.length < 1) {              /////////////////////// shows operator o2.....shows o2
    document.getElementById('screen').innerHTML = dEx;
}
//else if (exTwo.length >= 1 && o1.length < 1 && b1.length < 1) {    ////////// shows operator po1 o1 <-------not doing anything? pO1 still shows
   //// document.getElementById('screen').innerHTML = dEx;

//}

   

    else if (a1.length >= 1 && pO1.length == 1 && o1.length <= 1) {     ///show b1.....not showing b1
        document.getElementById('screen').innerHTML = dEx2.join('');
        console.log()
}

else if (a2.length >= 1 && o2.length >= 1 && exTwo.length < 1){         //show b2...is showing b2
    document.getElementById('screen').innerHTML = dEx2.join('');
    console.log

}




    //if (o2.length >=1) {
     //   document.getElementById('screen').innerHTML = (dEx[1].join(''));

   // }
}

//if (pO1.length < 1 && a2.length < 1) {
  //  document.getElementById('screen').innerHTML = a1.join('');

//}
//else if (a1.length >= 1 && b1.length < 1 && o1.length <= 1) {
  //  document.getElementById('screen').innerHTML = pO1;
//}
//else if (a1.length >= 1 && b1.length < 1 && o1.length > 1) {
  //  document.getElementById('screen').innerHTML = o1;


//}

//else if (a2.length >= 1 && b2.length < 1) {
  //  document.getElementById('screen').innerHTML = o2;

//}

//else if (pO1.length >= 1) {
  //  document.getElementById('screen').innerHTML = b1.join('');
//}

//else if (a2.length >= 1 && o2.length >= 1) {
  //  document.getElementById('screen').innerHTML = b2.join('');
//}
//else if (o1 == "/" && b1 == 0 || o2 == "/" && b2 == 0) {
//    document.getElementById('screen').innerHTML = "Nope";


// should i combine the three touch functions into one function? 
//will loop allow me to chain operations? recursive loop? 


//Event listner for a1, if expressionONe and preOperator 1 are less empty push to a1
function touchA() {
    document.getElementById("calcKey1").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(1);
            dEx.push(1);
            
            console.log(a1);
            showMe();

        }
    })

    document.getElementById("calcKey2").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(2);
            dEx.push(2);

            console.log(a1);
            showMe();


        }
    })

    document.getElementById("calcKey3").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(3);
            dEx.push(3);

            console.log(a1);
            showMe();
        }
    })

    document.getElementById("calcKey4").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(4);
            dEx.push(4);
            
            console.log(a1);
            showMe();
        }
    })

    document.getElementById("calcKey5").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(5);
            dEx.push(5);

            console.log(a1);
            showMe();
        }
    })

    document.getElementById("calcKey6").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(6);
            dEx.push(5);

            console.log(a1);
            showMe();
        }
    })

    document.getElementById("calcKey7").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(7);
            dEx.push(7);

            console.log(a1);
            showMe();


        }
    })

    document.getElementById("calcKey8").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(8);
            dEx.push(8);

            console.log(a1);
            showMe();
        }
    })

    document.getElementById("calcKey9").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(9);
            dEx.push(9);

            console.log(a1);
            showMe();


        }
    })

    document.getElementById("calcKey0").addEventListener("click", function () {
        if (exOne.length < 1 && o1.length < 1 && a2.length < 1) {
            a1.push(0);
            dEx.push(0);

            console.log(a1);
            showMe();


        }
    })

    document.getElementById("calcKeyClear").addEventListener("click", function () {
        

        
        exOne.length =0;
        a2.length = 0;
        a1.length = 0;
        o1.length = 0;
        o2.length = 0;
        b1.length = 0;
        b2.length = 0;
        exTwo.length = 0;
        eq2.length = 0;
        eq1.length = 0;
        dEx.length = 0;
        dEx2.length = 0;
        pO1.length = 0; 


        console.log(a1);
        console.log(exOne)
        console.log(b1);
        console.log(o1);
        console.log(o2);
        console.log(a2);
        console.log(cl);
        showMe();
    })
}


//document.getElementById("calcKeyDot").addEventListener ("click", function(){ 
//  if (exOne.length < 1 && o1.length < 1) {
//      a1.push(".");
//       console.log(a1);
//      showMe(); 
//   }
//} )
function touchB() {
    
    {

        document.getElementById("calcKey1").addEventListener("click", function () {
            if (pO1.length >= 1) {
                b1.push(1);
                dEx2.push(1);
                
                console.log(b1);
                showMe();

            }

            else if (a2.length >= 1) {
                b2.push(1);
                dEx2.push(1).join;

                console.log(b2);
                showMe();
            }
        })

        document.getElementById("calcKey2").addEventListener("click", function () {
            if (pO1.length >= 1) {
                b1.push(2);
                dEx2.push(2);
                
                console.log(b1);
                showMe();


            }
            else if (a2.length >= 1) {
                b2.push(2);
                dEx2.push(2);
               
                console.log(b2);
                showMe();
            }
        })

        document.getElementById("calcKey3").addEventListener("click", function () {
            if (pO1.length >= 1) {
                b1.push(3);
                dEx2.push(3);
                
                console.log(b1);
                showMe();


            }
            else if (a2.length >= 1) {
                b2.push(3);
                dEx2.push(3);
                
                console.log(b2);
                showMe();
            }
        })
    }

    document.getElementById("calcKey4").addEventListener("click", function () {
        if (pO1.length >= 1) {
            b1.push(4);
            dEx2.push(4);
            
            console.log(b1);
            showMe();


        } else if (a2.length >= 1) {
            b2.push(4);
            dEx2.push(4);
            
            console.log(o2);
            console.log(b2);
            console.log(o1);
            console.log(a2);
            console.log(exTwo);
            showMe();
        }
    })

    document.getElementById("calcKey5").addEventListener("click", function () {
        if (pO1.length >= 1) {
            b1.push(5);
            dEx2.push(5);
            
            console.log(b1);
            showMe();
        }

        else if (a2.length >= 1) {
            b2.push(5);
            dEx2.push(5);
            
            console.log(b2);
            showMe();
        }
    })

    document.getElementById("calcKey6").addEventListener("click", function () {
        if (pO1.length >= 1) {
            b1.push(6);
            dEx2.push(6);
            
            console.log(b1);
            showMe();
        }

        else if (a2.length >= 1) {
            b2.push(6);
            dEx2.push(6);
            
            console.log(b2);
            showMe();
        }
    })

    document.getElementById("calcKey7").addEventListener("click", function () {
        if (pO1.length >= 1) {
            b1.push(7);
            dEx2.push(7);
            
            console.log(b1);
            showMe();
        }
        else if (a2.length >= 1) {
            b2.push(7);
            dEx2.push(7);
            
            console.log(b2);
            showMe();
        }
    })

    document.getElementById("calcKey8").addEventListener("click", function () {
        if (pO1.length >= 1) {
            b1.push(8);
            dEx2.push(8);
            
            console.log(b1);
            showMe();
        }


        else if (a2.length >= 1) {
            b2.push(8);
            dEx2.push(8);
            
            console.log(b2);
            console.log(a1);
            console.log(exTwo)
            showMe();
        }
    })

    document.getElementById("calcKey9").addEventListener("click", function () {
        if (pO1.length >= 1) {
            b1.push(9);
            dEx2.push(9);
            
            console.log(b1);
            showMe();
        }

        else if (a2.length >= 1) {
            b2.push(9);
            dEx2.push(9);
            
            console.log(b2);
            showMe();
        }
    })

    document.getElementById("calcKey0").addEventListener("click", function () {
        if (pO1.length >= 1) {
            b1.push(0);
            dEx2.push(0);
            
            console.log(b1);
            showMe();
        }

        else if (a2.length >= 1) {
            b2.push(0);
            dEx2.push(0);
            
            console.log(b2);
            showMe();
        }
    })

    //document.getElementById("calcKeyDot").addEventListener( "click", function(){
    //if (pO1.length >= 1) {
    //  b1.push('.');
    //console.log(b1);
    //showMe();}

    // else if (a2.length >= 1) {
    //  b2.push('.');
    // console.log(b2);
    //  showMe();}}    



    document.getElementById("calcKeyClear").addEventListener(" click", function () {
       


        exOne.length =0;
        a2.length = 0;
        a1.length = 0;
        o1.length = 0;
        o2.length = 0;
        b1.length = 0;
        b2.length = 0;
        exTwo.length = 0;
        eq2.length = 0;
        eq1.length = 0;
        dEx.length = 0;
        dEx2.length = 0;
        pO1.length = 0; 



        console.log(a1);
        console.log(exOne)
        console.log(b1);
        console.log(o1);
        console.log(o2);
        console.log(a2);
        console.log(cl)
    })
}


// event listener for operator, if a1 length is greater than 1 and preOperator1 is empty, push operator to preOperator1.
// if b1 length is greater than 1 splice preOperator1 into operator1 and push RELEVANT  operator to operator2
// if operator2 is full push RELEVANT operator to preOperator1


function touchO() {



    document.getElementById("calcKeyPlus").addEventListener("click", function () {
        if (a1.length >= 1 && pO1.length < 1) {
            dEx.splice(0, dEx.length);
            
            dEx.push ('+');
            pO1.push('+');
            
            
            console.log(o1);
            console.log(pO1);
            console.log(a1);
            console.log(b1);
            console.log(dEx);
            showMe();

        }
        else if (b1.length >= 1) {
            dEx.splice(0, dEx.length);
            o1.splice(0, o1.length, ...pO1);
            
            dEx.push(a2);
            o2.push('+');
            
            console.log(exOne);
            console.log(pO1)
            console.log(eq2);
            console.log(a2);
            console.log(o2);
            console.log(dEx);
            showMe();




        }

        else if (a2.length >=1 && o2.length < 1) {
            dEx.splice(0, dEx.length, ...'+');
            
            
            o2.push('+');
            
            console.log(exOne);
            console.log(pO1)
            console.log(eq2);
            console.log(a2);
            console.log(o2);
            console.log(dEx);
            showMe();
        }

        else if (o2.length >= 1) {
            dEx.splice(0, dEx.length);
            
            dEx.push(a1);
            pO1.push('+');
            
            console.log(o2);
            console.log(o1);
            console.log(dEx);
            showMe();

        }


    })

    document.getElementById("calcKeyMinus").addEventListener("click", function () {
        if (a1.length >= 1 && pO1.length < 1) {
            dEx.splice(0, dEx.length);
            
            dEx.push('-');
            pO1.push('-');
            
            console.log(o1);
            showMe();

        }
        else if (b1.length >= 1) {
            dEx.splice(0, dEx.length);
            o1.splice(0, o1.length, ...pO1);
            
            dEx.push(a2);
            o2.push('-');

            console.log(exOne);
            console.log(a2);
            console.log(o2);
            console.log(dEx);
            showMe();



        }

        else if (a2.length >=1 && o2.length < 1) {
            dEx.splice(0, dEx.length, ...'-');
            
            
            o2.push('-');
            
            console.log(exOne);
            console.log(pO1)
            console.log(eq2);
            console.log(a2);
            console.log(o2);
            console.log(dEx);
            showMe();
        }


        else if (o2.length >= 1) {
            dEx.splice(0, dEx.length);
            
            dEx.push(a1);
            pO1.push('-');
            
            console.log(o2);
            console.log(o1);
            console.log(dEx);
            showMe();
        }
    })

    document.getElementById("calcKeyTimes").addEventListener("click", function () {
        if (a1.length >= 1 && pO1.length < 1) {
            dEx.splice(0, dEx.length);
            
            dEx.push('*')
            pO1.push('*');
           
            console.log(o1);
            console.log(dEx);
            showMe();

        }
        else if (b1.length >= 1) {
            dEx.splice(0, dEx.length);
            o1.splice(0, o1.length, ...pO1);
            
            dEx.push(a2);
            o2.push('*');
            
            console.log(exOne);
            console.log(a2);
            console.log(o2);
            console.log(dEx);
            showMe();




        }

        else if (a2.length >=1 && o2.length < 1) {
            dEx.splice(0, dEx.length, ...'*');
            
            
            o2.push('*');

            console.log(exOne);
            console.log(pO1)
            console.log(eq2);
            console.log(a2);
            console.log(o2);
            console.log(dEx);
            showMe();
        }


        else if (o2.length >= 1) {
            dEx.splice(0, dEx.length);

            dEx.push(a1);
            pO1.push('*');

            console.log(o2);
            console.log(o1);
            console.log(dEx);
            showMe();
        }
    })

    document.getElementById("calcKeyDivide").addEventListener("click", function () {
        if (a1.length >= 1 && pO1.length < 1) {
            dEx.splice(0, dEx.length);

            dEx.push('/');
            pO1.push('/');
            
            console.log(o1);
            console.log(dEx);
            showMe();

        }
        else if (b1.length >= 1) {
            dEx.splice(0, dEx.length);
            o1.splice(0, o1.length, ...pO1);

            dEx.push(a2);
            o2.push('/');
            
            console.log(exOne);
            console.log(a2);
            console.log(o2);
            console.log(dEx);
            showMe();




        }

        else if (a2.length >=1 && o2.length < 1) {
            dEx.splice(0, dEx.length, ...'/');

            
            o2.push('/');
            
            console.log(exOne);
            console.log(pO1)
            console.log(eq2);
            console.log(a2);
            console.log(o2);
            console.log(dEx);
            showMe();
        }


        else if (o2.length >= 1) {
            dEx.splice(0, dEx.length);

            dEx.push(a1);
            pO1.push('/');
            
            console.log(o2);
            console.log(o1);
            console.log(dEx);
            showMe();

        }
    })

    document.getElementById("calcKeyEqual").addEventListener("click", function () {

        if (b1.length >= 1) {
            o1.splice(0, o1.length, ...pO1);
            eq1.push('=');
            console.log(eq1)
            console.log(o1);
            console.log(pO1);
            console.log(a1);
            console.log(b1);
            console.log(dEx);
            showMe();
        }

        else if (b2.length >= 1) {
            eq2.push('=');
            
            console.log(dEx);
            showMe();
        }
    })

    document.getElementById("calcKeyClear").addEventListener(" click", function () {
         

        exOne.length = 0;
        a2.length = 0;
        a1.length = 0;
        o1.length = 0;
        o2.length = 0;
        b1.length = 0;
        b2.length = 0;
        exTwo.length = 0;
        eq2.length = 0;
        eq1.length = 0;
        dEx.length = 0;
        dEx2.length = 0;
        pO1.length = 0; 



        console.log(a1);
        console.log(exOne)
        console.log(b1);
        console.log(o1);
        console.log(o2);
        console.log(a2);
        console.log(cl)
            showMe();
        
    })

}


//Event Listener B
// event listener for b1 and b2
// if preOperator1 is full push to b1 
// if a2 length is greater than 0 push to b2





function operator() {
    document.querySelectorAll('.op').forEach(item => {
        item.addEventListener('click', event => {



            if (b1.length >= 1 && o1 == "+" || b1.length >= 1 && o1 == "+" && eq1.length >= 1) {
                a1.splice(0, a1.length, (a1.join('')));
                console.log(a1);
                b1.splice(0, b1.length, (b1.join('')));
                console.log(b1);
                exOne.splice(0, exOne.length, ((parseInt(a1, 10)) + (parseInt(b1, 10))));
                a2.splice(0, a2.length, ...exOne);
                dEx.splice(0,dEx.length, ...exOne);
                
                a1.splice(0, a1.length);
                o1.splice(0, o1.length);
                b1.splice(0, b1.length);
                pO1.splice(0, pO1.length);
                exTwo.splice(0, exTwo.length);
                dEx2.splice(0, dEx2.length);

                showMe();
                console.log(a1);
                console.log(exOne)
                console.log(b1);
                console.log(o1);
                console.log(o2);
                console.log(a2);
                console.log(pO1);
                console.log(eq2);
                console.log(dEx);

                
                

            }

            else if (b2.length >= 1 && o2 == "+" || b2.length >= 1 && eq2.length >= 1 && o2 == "+") {

                a2.splice(0, a1.length, (a2.join('')));
                console.log(a2);
                b2.splice(0, b2.length, (b2.join('')));
                console.log(b2);
                exTwo.splice(0, exTwo.length, ((parseInt(a2, 10)) + (parseInt(b2, 10))));
                a1.splice(0, a1.length, ...exTwo);
                exOne.splice(0, exOne.length);
                dEx.splice(0,dEx.length, ...exTwo);
                
                a2.splice(0, a2.length);
                o2.splice(0, o2.length);
                b2.splice(0, b2.length);
                eq2.splice(0, eq2.length);
                dEx2.splice(0, dEx2.length);
                
                showMe();
                console.log(a1);
                console.log(exTwo);
                console.log(a2);
                console.log(b2);
                console.log(o2);
                console.log(o1);
                console.log(exOne);
                console.log(pO1);
                console.log(eq2);
                console.log(dEx);

                


            }

            else if (b1.length >= 1 && o1 == "-" || b1.length >= 1 && o1 == "-" && eq1.length >= 1) {
                a1.splice(0, a1.length, (a1.join('')));
                console.log(a1);
                b1.splice(0, b1.length, (b1.join('')));
                console.log(b1);
                exOne.splice(0, exOne.length, ((parseInt(a1, 10)) - (parseInt(b1, 10))));
                a2.splice(0, a2.length, ...exOne);
                dEx.splice(0,dEx.length, ...exOne);
                exTwo.splice(0, exTwo.length);
                a1.splice(0, a1.length);
                o1.splice(0, o1.length);
                b1.splice(0, b1.length);
                pO1.splice(0, pO1.length);
                dEx2.splice(0, dEx2.length);
                
                showMe();

                console.log(a1);
                console.log(exOne)
                console.log(b1);
                console.log(o1);
                console.log(o2);
                console.log(a2)
                

            }

            else if (b2.length >= 1 && o2 == "-" || b2.length >= 1 && eq2.length >= 1 && o2 == "-") {

                a2.splice(0, a1.length, (a2.join('')));
                console.log(a2);
                b2.splice(0, b2.length, (b2.join('')));
                console.log(b2);
                exTwo.splice(0, exTwo.length, ((parseInt(a2, 10)) - (parseInt(b2, 10))));
                a1.splice(0, a1.length, ...exTwo);
                exOne.splice(0, exOne.length);
                dEx.splice(0,dEx.length, ...exTwo);

                a2.splice(0, a2.length);
                o2.splice(0, o2.length);
                b2.splice(0, b2.length);
                eq2.splice(0, eq2.length);
                dEx2.splice(0, dEx2.length);
                
                showMe();

                console.log(a2);
                console.log(exTwo)
                console.log(b2);
                console.log(o2);
                console.log(o1);
                console.log(a1)
                
            }
            else if (b1.length >= 1 && o1 == "*" || b1.length >= 1 && o1 == "*" && eq1.length >= 1) {
                a1.splice(0, a1.length, (a1.join('')));
                console.log(a1);
                b1.splice(0, b1.length, (b1.join('')));
                console.log(b1);
                exOne.splice(0, exOne.length, ((parseInt(a1, 10)) * (parseInt(b1, 10))));
                a2.splice(0, a2.length, ...exOne);
                dEx.splice(0,dEx.length, ...exOne);
                exTwo.splice(0, exTwo.length);
                a1.splice(0, a1.length);
                o1.splice(0, o1.length);
                b1.splice(0, b1.length);
                pO1.splice(0, pO1.length);
                dEx2.splice(0, dEx2.length);
                
                showMe();

                console.log(a1);
                console.log(exOne)
                console.log(b1);
                console.log(o1);
                console.log(o2);
                console.log(a2)
                

            }

            else if (b2.length >= 1 && o2 == "*" || b2.length >= 1 && eq2.length >= 1 && o2 == "*") {

                a2.splice(0, a1.length, (a2.join('')));
                console.log(a2);
                b2.splice(0, b2.length, (b2.join('')));
                console.log(b2);
                exTwo.splice(0, exTwo.length, ((parseInt(a2, 10)) * (parseInt(b2, 10))));
                a1.splice(0, a1.length, ...exTwo);
                dEx.splice(0,dEx.length, ...exTwo);

                exOne.splice(0, exOne.length);
                a2.splice(0, a2.length);
                o2.splice(0, o2.length);
                b2.splice(0, b2.length);
                eq2.splice(0, eq2.length);
                dEx2.splice(0, dEx2.length);

                
                showMe();

                console.log(a2);
                console.log(exTwo)
                console.log(b2);
                console.log(o2);
                console.log(o1);
                console.log(a1);
                

            }

            else if (b1.length >= 1 && o1 == "/" && b1 !== 0 || b1.length >= 1 && o1 == "/" && eq1.length >= 1 && b1 !== 0) {
                a1.splice(0, a1.length, (a1.join('')));
                console.log(a1);
                b1.splice(0, b1.length, (b1.join('')));
                console.log(b1);
                exOne.splice(0, exOne.length, ((parseInt(a1, 10)) / (parseInt(b1, 10))));
                a2.splice(0, a2.length, ...exOne);
                dEx.splice(0,dEx.length, ...exOne);
                exTwo.splice(0, exTwo.length);
                a1.splice(0, a1.length);
                o1.splice(0, o1.length);
                b1.splice(0, b1.length);
                pO1.splice(0, pO1.length);
                dEx2.splice(0, dEx2.length);
                
                showMe();

                
                console.log(a1);
                console.log(exOne)
                console.log(b1);
                console.log(o1);
                console.log(o2);
                console.log(a2);
                

            }

            else if (b2.length >= 1 && o2 == "/" && b2 !== 0 || b2.length >= 1 && eq2.length >= 1 && o2 == "/" && b2 !== 0) {

                a2.splice(0, a1.length, (a2.join('')));
                console.log(a2);
                b2.splice(0, b2.length, (b2.join('')));
                console.log(b2);
                exTwo.splice(0, exTwo.length, ((parseInt(a2, 10)) / (parseInt(b2, 10))));
                a1.splice(0, a1.length, ...exTwo);
                exOne.splice(0, exOne.length);
                dEx.splice(0,dEx.length, ...exTwo);

                a2.splice(0, a2.length);
                o2.splice(0, o2.length);
                b2.splice(0, b2.length);
                eq2.splice(0, eq2.length);
                dEx2.splice(0, dEx2.length);

                
                showMe();

                console.log(pO1);
                console.log(a2);
                console.log(exTwo)
                console.log(b2);
                console.log(o2);
                console.log(o1);
                console.log(a1)
                
            }
            else if (b2.length >= 1 && o2 == "/" && b2 == 0 || b2.length >= 1 && eq2.length >= 1 && o2 == "/" && b2 == 0 || b1.length >= 1 && o1 == "/" && b1 !== 0 || b1.length >= 1 && o1 == "/" && eq1.length >= 1 && b1 !== 0) {
                exTwo.splice(0, exTwo.length, ' division by zero ...D:');
                a1.splice(0, a1.length, ...exTwo);
                exOne.splice(0, exTwo.length, ' division by zero ...D:');
                a2.splice(0, a1.length, ...exOne);
    
                 

             }
            

        })
    })
}

touchA();
touchO();
touchB();
operator();