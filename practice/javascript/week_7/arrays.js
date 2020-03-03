var myVar = "one Item";
var firstDay = "monday";
var secondDay = "tuesday";

// array Syntax, a collection of data that is surrounded by square brakets.

var daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

// Requesting a specific value inside of the arrays:
// use squre barkets after calling the variable with the array
// put the index number inside of the square brakets.
// Example: myArray[7]
// Arrays are zero-based index, the first item has abn index or "address" of 0
console.log(daysOfWeek[6]);


// you can mix datatype in an array.
// [100, true, "hello"];

daysOfWeek[6] = "funday";
daysOfWeek[12] = "superday";
console.log(daysOfWeek[12]);