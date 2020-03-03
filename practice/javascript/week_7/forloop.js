var counter = 0;

while (10 > counter) {

// code to run per loop
    counter = counter + 1;
    console.log(counter);

    // the ++ will add a 1 to the exixting vaiable value;
    // the -- will subtract a 1 to the existing aliaible value

}
// inside the parentheses we have three parts: counter, condition and coe that changes the counter
// the third part only runs after the code blocks

// counnter++ means take the current value of variable and +1 

for (var counter = 0; 10 > counter; counter = counter + 1) {
console.log(counter);

}

/*for (var i = 0; i < 10; i++) {
// i is instand
for (var e = 0; e < 10; e++) {
    for (var o = 0; o < 10; 0++){

    }
}

}
*/

var specail = 1;

// outer loop will run for 10 times. for each time we are executing another loop that will itself run 10 times.

for (var i = 0; i < 10; i++) {
    console.log(specail + 1 );
    // the innrer loops that will run once (ten times)
   for (var e = 0; e < 10; e++) {

    }

}

/* 
var every = 49;
for (var every = 0; 49 > every; every = every +1){
    console.log(every);
}
*/

/*for (var i =0; i<= 48; i = i + 1){
    console.log(i);
    
}

*/
for (var i =0; i<= 48; i = i + 1){
    console.log("loop #" + i)

    if (i % 2 == 0){
        console.log(i);

    }else {
        continue;
    }
}

