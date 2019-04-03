"use strict";
//Logging external JS

console.log("Hello from external Javascript");

//Popup alert box w/ message
alert('Welcome to my Website!');

//Prompt that says Great, blue is my favorite color too if the user selects blue.
var userInput = prompt('What is your favorite color?');
alert('Great, ' + userInput + ' is my favorite color too!');

// No. 3 rewrite from yesterdays lesson using todays lessons exp.

//Question 1

alert('Welcome to Blockbuster! Please choose a movie and how long you would like to rent it for! All movies on special right now for 3 dollars!');
var rentLittleMermaid = prompt('How many days would you like to rent The Little Mermaid for?');
alert('Great! The Little Mermaid is due back at the store in ' + rentLittleMermaid + ' days. Enjoy your movie!');
console.log ('The user has rented The Little Mermaid for ' + rentLittleMermaid + ' days');

var rentBrotherBear = prompt('How many days would you like to rent Brother Bear for?');
alert('Great! The Brother Bear is due back at the store in ' + rentBrotherBear + ' days. Enjoy your movie!');
console.log ('The user has rented The Brother Bear for ' + rentBrotherBear + ' days');

var rentHercules = prompt('How many days would you like to rent Hercules for?');
alert('Great! Hercules is due back at the store in ' + rentHercules + ' days. Enjoy your movie!');
console.log ('The user has rented Hercules for ' + rentHercules + ' days');

var total = (+rentLittleMermaid * 3) + (+rentBrotherBear * 3) + (+rentHercules * 3);
alert('Thank you! Your total balance due is $' + total);
console.log('The user has a balance due of ' + total);



//Question 2

alert('Welcome to Wells Fargo mobile banking! Follow the prompts to correctly evaluate your income for the week.');
var googlePay = prompt('How much do you make at Google hourly?');
var googleHour = prompt('How many hours did you work at Google this week?');
console.log ('The user made $' + googlePay + ' an hour at Google and worked ' + googleHour + ' hours this week.');
alert('Thank you! You worked at Google for ' +googleHour + ' hours and made $' + googlePay + ' an hour while there.');

var amazonPay = prompt('How much do you make at Amazon hourly?');
var amazonHour = prompt('How many hours did you work at Amazon this week?');
console.log ('The user made $' + amazonPay + ' an hour at Amazon and worked ' + amazonHour + ' hours this week.');
alert('Thank you! You worked at Google for ' +amazonHour + ' hours and made $' + amazonPay + ' an hour while there.');


var facebookPay = prompt('How much do you make at Facebook hourly?');
var facebookHour = prompt('How many hours did you work at Facebook this week?');
console.log ('The user made $' + facebookPay + ' an hour at Facebook and worked ' + facebookHour + ' hours this week.');
alert('Thank you! You worked at Google for ' +facebookHour + ' hours and made $' + facebookPay + ' an hour while there.');

var totalMoney = (googlePay * googleHour) + (amazonPay * amazonHour) + (facebookPay * facebookHour);
console.log ('The user made $' + totalMoney + ' this week.');
alert('Thank you. Your total income for the week is $' +totalMoney);




//Question 3

alert('Welcome to enrollment for the fall classes! Please select all that apply to you.');
var isFull = confirm('Is the class full? Click OK if the class is full');
console.log (isFull);
var isConflict = confirm('Does the class schedule conflict with your current schedule? Click OK if it does conflict.')
console.log (isFull);
