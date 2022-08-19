
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



//display 

function showMe() {

    document.getElementById('screen').innerHTML = '0';

    if (pO1.length < 1 && a2.length < 1) {
        document.getElementById('screen').innerHTML = a1.join('');

    }
    else if (a1.length >= 1 && b1.length < 1 && o1.length <= 1) {
        document.getElementById('screen').innerHTML = pO1;
    }
    else if (a1.length >= 1 && b1.length < 1 && o1.length > 1) {
        document.getElementById('screen').innerHTML = o1;


    }

    else if (a2.length >= 1 && b2.length < 1) {
        document.getElementById('screen').innerHTML = o2;

    }

    else if (pO1.length >= 1) {
        document.getElementById('screen').innerHTML = b1.join('');
    }

    else if (a2.length >= 1 && o2.length >= 1) {
        document.getElementById('screen').innerHTML = b2.join('');
    }
    else if (cl.length >= 1) {
        document.getElementById('screen').innerHTML = ('0');
    }

}




// should i combine the three touch functions into one function? 
//will loop allow me to chain operations? recursive loop? 


//Event listner for a1, if expressionONe and preOperator 1 are less empty push to a1
function touchA() {
    document.getElementById("calcKey1").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(1);
            console.log(a1);
            showMe();

        }
    })

    document.getElementById("calcKey2").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(2);
            console.log(a1);
            showMe();


        }
    })

    document.getElementById("calcKey3").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(3);
            console.log(a1);
            showMe();
        }
    })

    document.getElementById("calcKey4").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(4);
            console.log(a1);
            showMe();
        }
    })

    document.getElementById("calcKey5").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(5);
            console.log(a1);
            showMe();
        }
    })

    document.getElementById("calcKey6").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(6);
            console.log(a1);
            showMe();
        }
    })

    document.getElementById("calcKey7").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(7);
            console.log(a1);
            showMe();


        }
    })

    document.getElementById("calcKey8").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(8);
            console.log(a1);
            showMe();
        }
    })

    document.getElementById("calcKey9").addEventListener("click", function () {
        if (exOne.length < 1 && pO1.length < 1 && a2.length < 1) {
            a1.push(9);
            console.log(a1);
            showMe();


        }
    })

    document.getElementById("calcKey0").addEventListener("click", function () {
        if (exOne.length < 1 && o1.length < 1 && a2.length < 1) {
            a1.push(0);
            console.log(a1);
            showMe();


        }
    })

    document.getElementById("calcKeyClear").addEventListener("click", function () {

        cl.push('cl');
        exOne.splice(0, exOne.length);
        a2.splice(0, a2.length);
        a1.splice(0, a1.length);
        o1.splice(0, o1.length);
        o2.splice(0, o2.length);
        b1.splice(0, b1.length);
        b2.splice(0, o2.length);
        exTwo.splice(0, exTwo.length);
        eq2.splice(0, eq2.length);
        eq1.splice(0, eq1.length);


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
                console.log(b1);
                showMe();

            }

            else if (a2.length >= 1) {
                b2.push(1);
                console.log(b2);
                showMe();
            }
        })

        document.getElementById("calcKey2").addEventListener("click", function () {
            if (pO1.length >= 1) {
                b1.push(2);
                console.log(b1);
                showMe();


            }
            else if (a2.length >= 1) {
                b2.push(2);
                console.log(b2);
                showMe();
            }
        })

        document.getElementById("calcKey3").addEventListener("click", function () {
            if (pO1.length >= 1) {
                b1.push(3);
                console.log(b1);
                showMe();


            }
            else if (a2.length >= 1) {
                b2.push(3);
                console.log(b2);
                showMe();
            }
        })
    }

    document.getElementById("calcKey4").addEventListener("click", function () {
        if (pO1.length >= 1) {
            b1.push(4);
            console.log(b1);
            showMe();


        } else if (a2.length >= 1) {
            b2.push(4);
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
            console.log(b1);
            showMe();
        }

        else if (a2.length >= 1) {
            b2.push(5);
            console.log(b2);
            showMe();
        }
    })

    document.getElementById("calcKey6").addEventListener("click", function () {
        if (pO1.length >= 1) {
            b1.push(6);
            console.log(b1);
            showMe();
        }

        else if (a2.length >= 1) {
            b2.push(6);
            console.log(b2);
            showMe();
        }
    })

    document.getElementById("calcKey7").addEventListener("click", function () {
        if (pO1.length >= 1) {
            b1.push(7);
            console.log(b1);
            showMe();
        }
        else if (a2.length >= 1) {
            b2.push(7);
            console.log(b2);
            showMe();
        }
    })

    document.getElementById("calcKey8").addEventListener("click", function () {
        if (pO1.length >= 1) {
            b1.push(8);
            console.log(b1);
            showMe();
        }


        else if (a2.length >= 1) {
            b2.push(8);
            console.log(b2);
            console.log(a1);
            console.log(exTwo)
            showMe();
        }
    })

    document.getElementById("calcKey9").addEventListener("click", function () {
        if (pO1.length >= 1) {
            b1.push(9);
            console.log(b1);
            showMe();
        }

        else if (a2.length >= 1) {
            b2.push(9);
            console.log(b2);
            showMe();
        }
    })

    document.getElementById("calcKey0").addEventListener("click", function () {
        if (pO1.length >= 1) {
            b1.push(0);
            console.log(b1);
            showMe();
        }

        else if (a2.length >= 1) {
            b2.push(0);
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

        cl.push("cl");
        exOne.splice(0, exOne.length);
        a2.splice(0, a2.length);
        a1.splice(0, a1.length);
        o1.splice(0, o1.length);
        o2.splice(0, o2.length);
        b1.splice(0, b1.length);
        b2.splice(0, o2.length);
        exTwo.splice(0, exTwo.length);
        eq1.splice(0, eq1.length);
        eq2.splice(0, eq2.length);

        console.log(a1);
        console.log(exOne)
        console.log(b1);
        console.log(o1);
        console.log(o2);
        console.log(a2);
        showMe()
    })
}


// event listener for operator, if a1 length is greater than 1 and preOperator1 is empty, push operator to preOperator1.
// if b1 length is greater than 1 splice preOperator1 into operator1 and push RELEVANT  operator to operator2
// if operator2 is full push RELEVANT operator to preOperator1


function touchO() {



    document.getElementById("calcKeyPlus").addEventListener("click", function () {
        if (a1.length >= 1 && pO1.length < 1) {
            pO1.push('+');
            console.log(o1);
            console.log(pO1);
            console.log(a1)
            console.log(b1)
            showMe();

        }
        else if (b1.length >= 1) {
            o1.splice(0, o1.length, ...pO1);

            o2.push('+');
            console.log(exOne);
            console.log(pO1)
            console.log(eq2);
            console.log(a2);
            console.log(o2);
            showMe();




        }

        else if (a2.length >=1 && o2.length < 1) {
            o2.push('+');
            console.log(exOne);
            console.log(pO1)
            console.log(eq2);
            console.log(a2);
            console.log(o2);
            showMe();
        }

        else if (o2.length >= 1) {
            pO1.push('+');
            console.log(o2);
            console.log(o1);
            showMe();

        }


    })

    document.getElementById("calcKeyMinus").addEventListener("click", function () {
        if (a1.length >= 1 && pO1.length < 1) {
            pO1.push('-');
            console.log(o1);
            showMe();

        }
        else if (b1.length >= 1) {
            o1.splice(0, o1.length, ...pO1);

            o2.push('-');
            console.log(exOne);
            console.log(a2);
            console.log(o2);
            showMe();



        }

        else if (a2.length >=1 && o2.length < 1) {
            o2.push('-');
            console.log(exOne);
            console.log(pO1)
            console.log(eq2);
            console.log(a2);
            console.log(o2);
            showMe();
        }


        else if (o2.length >= 1) {
            pO1.push('-');
            showMe();
            console.log(o2);
            console.log(o1);
            showMe();
        }
    })

    document.getElementById("calcKeyTimes").addEventListener("click", function () {
        if (a1.length >= 1 && pO1.length < 1) {
            pO1.push('*');
            console.log(o1);
            showMe();

        }
        else if (b1.length >= 1) {
            o1.splice(0, o1.length, ...pO1);

            o2.push('*');
            console.log(exOne);
            console.log(a2);
            console.log(o2);
            showMe();




        }

        else if (a2.length >=1 && o2.length < 1) {
            o2.push('*');
            console.log(exOne);
            console.log(pO1)
            console.log(eq2);
            console.log(a2);
            console.log(o2);
            showMe();
        }


        else if (o2.length >= 1) {
            pO1.push('*');

            console.log(o2);
            console.log(o1);
            showMe();
        }
    })

    document.getElementById("calcKeyDivide").addEventListener("click", function () {
        if (a1.length >= 1 && pO1.length < 1) {
            pO1.push('/');
            console.log(o1);
            showMe();

        }
        else if (b1.length >= 1) {
            o1.splice(0, o1.length, ...pO1);

            o2.push('/');
            console.log(exOne);
            console.log(a2);
            console.log(o2);
            showMe();




        }

        else if (a2.length >=1 && o2.length < 1) {
            o2.push('/');
            console.log(exOne);
            console.log(pO1)
            console.log(eq2);
            console.log(a2);
            console.log(o2);
            showMe();
        }


        else if (o2.length >= 1) {
            pO1.push('/');
            console.log(o2);
            console.log(o1);
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
            showMe();
        }

        else if (b2.length >= 1) {
            eq2.push('=');
            showMe();
        }
    })

    document.getElementById("calcKeyClear").addEventListener(" click", function () {
        if (a1.length > 0 || a2.length > 0 || b1.length > 0 || b2.length > 0 || exOne.length > 0 || exTwo.length > 0 || o1.length > 0 || o2.length > 0) {
            cl.push("cl");
            exOne.splice(0, exOne.length);
            a2.splice(0, a2.length);
            a1.splice(0, a1.length);
            o1.splice(0, o1.length);
            o2.splice(0, o2.length);
            pO1.splice(0, pO1.length);
            b1.splice(0, b1.length);
            b2.splice(0, o2.length);
            eq1.splice(0, eq1.length);

            eq2.splice(0, eq2.length);
            exTwo.splice(0, exTwo.length);
            console.log(a1);
            console.log(exOne)
            console.log(b1);
            console.log(o1);
            console.log(o2);
            console.log(a2);
            showMe();
        }
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
                a1.push(a1.join(''));
                console.log(a1);
                b1.splice(0, b1.length, (b1.join('')));
                console.log(b1);
                exOne.splice(0, exOne.length, ((parseInt(a1, 10)) + (parseInt(b1, 10))));
                a2.splice(0, a2.length, ...exOne);
                a1.splice(0, a1.length);
                o1.splice(0, o1.length);
                b1.splice(0, b1.length);
                pO1.splice(0, pO1.length);
                exTwo.splice(0, exTwo.length);
                console.log(a1);
                console.log(exOne)
                console.log(b1);
                console.log(o1);
                console.log(o2);
                console.log(a2);
                console.log(pO1);
                console.log(eq2);

                document.getElementById('screen').innerHTML = exOne;

            }

            else if (b2.length >= 1 && o2 == "+" || b2.length >= 1 && eq2.length >= 1 && o2 == "+") {

                a2.splice(0, a1.length, (a2.join('')));
                console.log(a2);
                b2.splice(0, b2.length, (b2.join('')));
                console.log(b2);
                exTwo.splice(0, exTwo.length, ((parseInt(a2, 10)) + (parseInt(b2, 10))));
                a1.splice(0, a1.length, ...exTwo);
                exOne.splice(0, exOne.length);
                a2.splice(0, a2.length);
                o2.splice(0, o2.length);
                b2.splice(0, b2.length);
                eq2.splice(0, eq2.length);
                console.log(a1);
                console.log(exTwo);
                console.log(a2);
                console.log(b2);
                console.log(o2);
                console.log(o1);
                console.log(exOne);
                console.log(pO1);
                console.log(eq2);


                document.getElementById('screen').innerHTML = exTwo;

            }

            else if (b1.length >= 1 && o1 == "-" || b1.length >= 1 && o1 == "-" && eq1.length >= 1) {
                a1.splice(0, a1.length, (a1.join('')));
                console.log(a1);
                b1.splice(0, b1.length, (b1.join('')));
                console.log(b1);
                exOne.splice(0, exOne.length, ((parseInt(a1, 10)) - (parseInt(b1, 10))));
                a2.splice(0, a2.length, ...exOne);
                exTwo.splice(0, exTwo.length);
                a1.splice(0, a1.length);
                o1.splice(0, o1.length);
                b1.splice(0, b1.length);
                pO1.splice(0, pO1.length);
                console.log(a1);
                console.log(exOne)
                console.log(b1);
                console.log(o1);
                console.log(o2);
                console.log(a2)

                document.getElementById('screen').innerHTML = exOne;

            }

            else if (b2.length >= 1 && o2 == "-" || b2.length >= 1 && eq2.length >= 1 && o2 == "-") {

                a2.splice(0, a1.length, (a2.join('')));
                console.log(a2);
                b2.splice(0, b2.length, (b2.join('')));
                console.log(b2);
                exTwo.splice(0, exTwo.length, ((parseInt(a2, 10)) - (parseInt(b2, 10))));
                a1.splice(0, a1.length, ...exTwo);
                exOne.splice(0, exOne.length);
                a2.splice(0, a2.length);
                o2.splice(0, o2.length);
                b2.splice(0, b2.length);
                eq2.splice(0, eq2.length);
                console.log(a2);
                console.log(exTwo)
                console.log(b2);
                console.log(o2);
                console.log(o1);
                console.log(a1)

                document.getElementById('screen').innerHTML = exTwo;
            }
            else if (b1.length >= 1 && o1 == "*" || b1.length >= 1 && o1 == "*" && eq1.length >= 1) {
                a1.splice(0, a1.length, (a1.join('')));
                console.log(a1);
                b1.splice(0, b1.length, (b1.join('')));
                console.log(b1);
                exOne.splice(0, exOne.length, ((parseInt(a1, 10)) * (parseInt(b1, 10))));
                a2.splice(0, a2.length, ...exOne);
                exTwo.splice(0, exTwo.length);
                a1.splice(0, a1.length);
                o1.splice(0, o1.length);
                b1.splice(0, b1.length);
                pO1.splice(0, pO1.length);
                console.log(a1);
                console.log(exOne)
                console.log(b1);
                console.log(o1);
                console.log(o2);
                console.log(a2)

                document.getElementById('screen').innerHTML = exOne;

            }

            else if (b2.length >= 1 && o2 == "*" || b2.length >= 1 && eq2.length >= 1 && o2 == "*") {

                a2.splice(0, a1.length, (a2.join('')));
                console.log(a2);
                b2.splice(0, b2.length, (b2.join('')));
                console.log(b2);
                exTwo.splice(0, exTwo.length, ((parseInt(a2, 10)) * (parseInt(b2, 10))));
                a1.splice(0, a1.length, ...exTwo);
                exOne.splice(0, exOne.length);
                a2.splice(0, a2.length);
                o2.splice(0, o2.length);
                b2.splice(0, b2.length);
                eq2.splice(0, eq2.length);

                console.log(a2);
                console.log(exTwo)
                console.log(b2);
                console.log(o2);
                console.log(o1);
                console.log(a1)

                document.getElementById('screen').innerHTML = exTwo;
            }

            else if (b1.length >= 1 && o1 == "/" || b1.length >= 1 && o1 == "/" && eq1.length >= 1) {
                a1.splice(0, a1.length, (a1.join('')));
                console.log(a1);
                b1.splice(0, b1.length, (b1.join('')));
                console.log(b1);
                exOne.splice(0, exOne.length, ((parseInt(a1, 10)) / (parseInt(b1, 10))));
                a2.splice(0, a2.length, ...exOne);
                exTwo.splice(0, exTwo.length);
                a1.splice(0, a1.length);
                o1.splice(0, o1.length);
                b1.splice(0, b1.length);
                pO1.splice(0, pO1.length);
                console.log(a1);
                console.log(exOne)
                console.log(b1);
                console.log(o1);
                console.log(o2);
                console.log(a2)

                document.getElementById('screen').innerHTML = exOne;

            }

            else if (b2.length >= 1 && o2 == "/" || b2.length >= 1 && eq2.length >= 1 && o2 == "/") {

                a2.splice(0, a1.length, (a2.join('')));
                console.log(a2);
                b2.splice(0, b2.length, (b2.join('')));
                console.log(b2);
                exTwo.splice(0, exTwo.length, ((parseInt(a2, 10)) / (parseInt(b2, 10))));
                a1.splice(0, a1.length, ...exTwo);
                exOne.splice(0, exOne.length);
                a2.splice(0, a2.length);
                o2.splice(0, o2.length);
                b2.splice(0, b2.length);
                eq2.splice(0, eq2.length);

                console.log(pO1);
                console.log(a2);
                console.log(exTwo)
                console.log(b2);
                console.log(o2);
                console.log(o1);
                console.log(a1)

                document.getElementById('screen').innerHTML = exTwo;
            }

        })
    })
}

touchA();
touchO();
touchB();
operator();