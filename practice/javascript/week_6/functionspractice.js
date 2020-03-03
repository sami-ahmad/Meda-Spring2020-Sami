
// Concatention example


"a word" + "gabe";
"a number" + 100;
"hello" + true;
100 + "a number";
console.log(100 + 100 + 100 + "hello");
console.log("hello" + 100 + 100 + 100);


function sentencebuilder(person, place, action, item) {
    var firstPart = " went to the ";
    var secondPart = " and " ;
    var thirdPart = " but there was a probelm ";
    var fourtPart = " did not work ";
     var completeSentence = person + firstPart + place + secondPart + action + thirdPart + item + fourtPart;
     console.log(completeSentence);

// Ahmad went to the Happy Donut andtalked with the stor owner  but there was a probelmdont have money did not work

}

sentencebuilder("Ahmad", "Happy Donut", "talked with the stor owner ", "dont have money");
 

function getNumber(){
    var theSpecialNumber = 42;
    return theSpecialNumber;
}

console.log( getNumber() );

var newNumber = getNumber() + 100; // result 142
console.log(newNumber);

var newNumber = getNumber() / 2; // result 21


function getName() {

    var firstName = "Sami";
    return firstName;
}

console.log( getName() + " is a Good Guy ");


