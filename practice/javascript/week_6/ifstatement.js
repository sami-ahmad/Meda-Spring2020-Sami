
// If-Else statement< AKA conditional statement
// if (condition) {}


if (true) {

    console.log("This code ran if the statement was true.");
}

var age = 20; 
if (age >= 21){

    console.log("congrats go get drunk!");
}


var password = "abcd";

if (password == "abcd") {

    console.log("welcome to your page");
}



// IF abd Else parts

// the Else says if the condition is false so run onther code which we set it in the Else 

var sayHello;

if (sayHello) {
    console.log("hello");
} else {
    console.log("goodbye");
}

// Truthy and Falsey values.

// if a variable is holding any of the following it will become a fasle boolean:

/*
list of most common ALSYS
undefined 
null
0
""
NaN

list of most common TRUTHYS
"0"
-1


*/

var checkIfTrue = 0;

if (checkIfTrue) {
    console.log("the '" + checkIfTrue +  "' value is truthy.");
} else { 
    console.log("the '" + checkIfTrue + "' value is falsy .");

}

// Logical Operators: &&, ||, !

/*
&& = both sides must be true
|| = either side must be true 
! = connot be true to be true or flip the boolean. (if true, it comes false, and if it si false it becomes true )

*/
var firstBool = true;
var secondBool = false;

if (firstBool && secondBool) {

    console.log(" This is has runned because the condition is true.");
}

if (firstBool || secondBool){

    // do somthing
}

// Else if section. allows you to test somthing and run other code, if the first question was fasle


var level = 25;
if (level > 0 && level < 18) {
    console.log("you are child");

} else if (level < 0) {
    console.log(" you are not born yet");
} else if (level >= 18 && level < 112) {
    console.log("you are adult")
} else {
    console.log("thank you for living, come again next time.");
}

// Multiple Logical Operators
// All && go first, then ||
// if equal, then left to right