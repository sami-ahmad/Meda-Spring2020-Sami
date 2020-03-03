
function adder(num1, num2) {
    return num1 + num2;

}

console.log( adder(100, "Tony") );

/* 
1) 100 and Tony get sent to the Adder function.
2) Adder function runs, and places 100 nad Tony, into 
num1 and num2 
3) Before we can return a value , we need to add/ concatenate. We call num1 and num2 variables for 
its values, and then add/concatenate them together.
4) The return keyword says that we will return this single value back to wherever the function
was called.
5) the adder function has returned "100Tony" as a single and is replaced by the value.
6) because this value is inside o the console.log arguents area, it will be sent off to the console.log
function.
*/



 /*function taxCalculator(itemPrice){
    var tax = itemPrice * .085;
    var taxedFixedToTwoDecimalPlaces = tax.toFixed(2);
    var taxNumber = parseIn(taxedFixedToTwoDecimalPlaces);
    return taxNumber;
}

var laptopPrice = 999.95;
var laptopTax = taxCalculator(laptopPrice);

console.log ("price of item: $" + laptopPrice +". Tax on item: " + laptopTax + ". Total Cost: $" + (laptopPrice + laptopTax) + ".")

*/

function mathifier(num1 , num2 ) {

    var sum = num1 + num2;
    var newSum = sum + num1;
    var product = newSum * num2;

    return product;
}

console.log (mathifier(2, 4 ) ); // result 32 


/*function mathResults(item1 , item2) {

    var sum = item1 + item2;
    var add  = sum + item1;
    var product = item1 * item2;
    var divident = item1 + item2;
    var remaind = item1 + item2 / add
}

console.log(mathResutls(2 , 5 ) );

*/


function mathResults(num1, num2){

    console.log(num1, num2);
    var sum = num1 + num2
    console.log()

}
