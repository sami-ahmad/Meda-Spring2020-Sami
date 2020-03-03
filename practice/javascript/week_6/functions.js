// Intro to functions

// exmaple og functions we have used so far 

console.log ();
Math.round ();
Math.floor ();
Math.ceil ();
Math.random ();

var currentTime = Date.now();
console.log(currentTime);



// the syntax Structure of a Function definition.

// function is the decoration
//{} or code block that delcare our code 
// () 

function nameOffFunction() {
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
}
nameOffFunction();
nameOffFunction();


/* Similar to Css Rulesets 
selecto{
    property: value;
    property: value;
}
*/

function nameOffStaff() {
    console.log("Ahmad");
    console.log("Mohmmad");
    console.log("edoardo")
}

nameOffStaff();

function takeDataIn() {

     console.log();


}

// there are two words 1 Arguments and Parameters
//  Arguments are the values that you given to computer
// "hello" is the argument
// parameters are the text that accept any data that is given to the function  

console.log("hello \n", 100, true); // \n make new line like in html <br> work 

function takeDataIn(text1, text2) {
console.log(text1);
console.log(text2);

}

takeDataIn("How are you doig?", "Jesser");
takeDataIn("GoodBye!", 1000);













function adder(number1, number2) {

    var sum = number1 + number2;
    console.log( " The sum of " + number1 + " and " + number2 +  " is " + sum); // we are storing our data in number1 and number2 

    
}
adder(4000, 19);

