//Map Examples



//returns the even numbers only in the numbers array and places them into the evens variable

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evens = numbers.filter(function (value) {
    return value % 2 == 0;
});
console.log(evens);


//returns the odd numbers from only the numbers array and places them in a new variable called "odds"

var odds = numbers.filter(function (value) {
    return value % 2 !== 0;
});
console.log(odds);


//takes the numbers variable and returns the whole array -2 numbers (pushing it down to negative 1) and places it within the decrement varaible.

var decrement = numbers.map(function (value) {
    return value - 2;
});

console.log(decrement);



// takes the numbers array and returns each number mulitplied by 5 and places them all within the multiple variable.

var multiply = numbers.map(function (value) {
    return value * 5;
});

console.log(multiply);




//Reduce Examples


















//Lesson Questions

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Question 1
// FILTER NEEDS TO BE A BOOLEON
var threeLang = users.filter(function (user) {
    return user.languages.length >= 3;
});

console.log(threeLang);



//Question 2
// MAP IS AN ARRAY

var userEmails = users.map(function (user) {
    return user.email
});

console.log(userEmails);

//Question 3

// var yearsOfXp = users.reduce(function (totalExp, user) => totalExp
//
// ,0);




//Question 4

// var longestEmail = users.reduce(function (longestEmail, user) => {
//     if (user.email >= longestEmail.length) {
//         longestEmail = user.email;
// }
//     return longestEmail;
// },'');

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
}, 0);

