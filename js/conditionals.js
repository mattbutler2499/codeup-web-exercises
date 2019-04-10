// "use strict";
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * if what the user enters is not a number, use an alert to tell them that, and
//  * do *not* display any of the above information.
//  *
//  * Can you refactor your code to use functions?
//  */
//
// function isEvenOrOdd(strToNum){
//     if (strToNum % 2 === 0) {
//        return alert("Your number is an even number")
//     } else if (strToNum % 2 === 1) {
//        return alert('Your number is an odd number')
//     } else {
//         return alert('That is not a number. Please try again.')
//     }
//
// }
//
// var enterNumber = confirm('Would you like to enter a number?');
// if (enterNumber === true) {
//     var userInput = prompt('Please enter a number below');
//     var strToNum = parseInt(userInput);
//     var sumPlus100 = strToNum + 100;
//     if (isNaN(strToNum)) {
//         if (strToNum % 2 === 0) {
//             alert("Your number is an even number")
//         } else if (strToNum % 2 === 1) {
//             alert('Your number is an odd number')
//         } else {
//             alert('That is not a number. Please try again.')
//         }
//         alert('Your number plus 100 equals ' + sumPlus100);
//
//         if (strToNum >= 0) {
//             alert('This is a positive number')
//         } else if (strToNum < 0) {
//             alert('Your number is a negative number')
//         } else {
//             alert('This is not a number. Please try again.')
//         }
//     }
// } else {
//     alert('Ok, Bye.')
// }
// /* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// var color = prompt ("Please insert a color here");
function analyzeColor(color) {
switch (color.toLocaleLowerCase()) {
    case 'red':
        alert("Apples are red.");
        break;
    case 'orange':
        alert("Orange is the color or an orange.");
        break;
    case 'yellow':
        alert("Bananas are yellow.");
        break;
    case 'green':
        alert("Grass is green.");
        break;
    case 'blue':
        alert("Blue is the color of the sky.");
        break;
    case 'indigo':
        alert("Some butterfly wings have indigo in them.");
        break;
    case 'violet':
        alert("Amethysts are violet.");
        break;
    default:
        alert("Im sorry I don't know that color");
        break;

}}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(analyzeColor(randomColor));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */



/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(lucky, total) {
    var discount;
    if (lucky ===0){
        alert('Sorry you get no discount');
        discount = 0;
    } else if (lucky ===1){
        alert('You get a 10% discount');
        discount = .10;
    } else if (lucky ===2){
        alert('You get a 25% discount');
        discount = .25;
    } else if (lucky ===3){
        alert('You get a 35% discount');
        discount = .35;
    } else if (lucky ===4){
        alert('You get a 50% discount');
        discount = .5
    } else {
        alert("you get it all for free!");
        discount = 1;
    }
    return total - (discount * total);
}

var luckyNumber = Math.floor(Math.random() * 6);
console.log(calculateTotal(luckyNumber,100));



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6


//Practice Test


//Question 1
function isTrue(input){
    return input === true;
}

console.log(isTrue(true));



//Q 3
function not(input){
    return !input;
}
console.log(not(0));


//Q4

function addOne(input){
    if(typeof input === "string" || typeof input === "number") {
          return ++input;
    }
}

console.log(addOne(0));

function isEven(input){
    if (typeof input === "string" || typeof input === "number"){
        if(input % 2 === 0){
            return true;
        }else {
            return false;
        }
    }
}

console.log(isEven(6));

//Q8
function or(x,y){
    return x || y;
}

console.log(or(true, true));

function concat(x,y){
    if(typeof x === "string" && typeof y === "string"){
        return x + y;
    } else if (typeof x === "number" && typeof y === "number"){
        return x.toString() + y.toString();
    }
}
console.log(concat(5,7));