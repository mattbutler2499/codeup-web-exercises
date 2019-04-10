'use strict';


var inputOddNumber = prompt("Please enter an odd number between 1 and 50 you would like to skip!");

for (var i = 1; i <=50; i++){
    if (i % 2 === 1) continue; {
        console.log("Here is an odd number: " + i);
    } else {
        prompt("Please enter an odd number");
    }
}




