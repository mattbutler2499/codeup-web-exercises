//Quesiton 1

function filterNumbers(array) {
    var numberArray = array.filter(function (value) {
        if (typeof value === "number") {
            return true;
        } else {
            return false;
        }
    });
     return numberArray.sort(function(a, b){return a - b});
}

var stuff = ["bob", "cameron", 5, 24, 7, true];
console.log(filterNumbers(stuff));


//Question 2
function getOlder(dogs) {
  dogs.forEach(
      function (dog) {
          dog.age++
      }
  )
}

var listOfDogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

getOlder(listOfDogs);
console.log(listOfDogs);

//Question 3

function washCars(cars) {
    cars.forEach(function (car) {
        car.isDirty = false;
    })
}


var listOfCars = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
];

washCars(listOfCars);
console.log(listOfCars);

//Question 4

// function adminList(users) {
//    var numOfAdmins = 0;
//     users.forEach(function (user) {
//        if (user.isAdmin){
//          numOfAdmins++;
//        }
//    });
//     return numOfAdmins;
// }
//
//
// var listofUsers = [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user3@email.com'
//     }
// ];
// console.log(adminList(listofUsers));;




//Return emails that are only from admins as an array

// function adminList(users) {
//     var adminEmails = [];
//     users.forEach(function (user) {
//         if (user.isAdmin){
//             adminEmails.push(user.email);
//         }
//     });
//     return adminEmails;
// }
//
// var listofUsers = [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     },
//     {
//         isAdmin: false,
//         email: 'user3@email.com'
//     }
// ];
// console.log(adminList(listofUsers));


//returns an array of admins

// function adminList(users) {
//     var admins = [];
//     users.forEach(function (user) {
//         if (user.isAdmin){
//             admins.push(user);
//         }
//     });
//     return admins;
// }
//
// var listofUsers = [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     },
//     {
//         isAdmin: false,
//         email: 'user3@email.com'
//     }
// ];
// console.log(adminList(listofUsers));




//returns an array
//Question 5
function makeSandwhichObjects(breads, fillings) {
   var sandwhiches = [];
    for (var i = 0; i < breads.length; i++ ){
        var sandwhich = {};
        sandwhich.bread = breads[i];
        sandwhich.filling = fillings[i];
        sandwhiches.push(sandwhich);
   }
    return sandwhiches;
}
var breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];

console.log(makeSandwhichObjects(breads, fillings));

//Question 6

    // 1. get a list of the properties
    // 2. loop through all properties of object
        // a. if is a string
            // put first letter in an array
        // b. if not a string
            // do nothing
    // 3. return list of first characters


function firstLettersOfStringProps(things){
    var propertiesArray = [];
    var properties = (Object.keys(things));
    for (var i = 0; i < properties.length; i++){
        var value = stuff[properties[i]];
        if (typeof value === "string"){
            propertiesArray.push(value.substring(0,1))
        }
    }
    return propertiesArray;
}

var stuff = {
    propA: true,
    propB: "hello",
    propC: 23,
    propD: "world"
};

console.log(firstLettersOfStringProps(stuff));


//Question 7

function returnBasicUserData(users){
    var listOfUsers = [];
    users.forEach(function (user) {
        var newUser = {
            name: user.name,
            age: user.age
        };
        listOfUsers.push(newUser)
    });
    return listOfUsers;
}

var userInfo = [
    {
        name: "Fred Smith",
        favColor: "Blue",
        age: 25
    },
    {
        name: "Sally Smith",
        favPet: "Dogs",
        isAdmin: true,
        age: 37
    },
    {
        phoneNumber: "5552759898",
        name: "Karen Smith",
        age: 19
    }
];


console.log(returnBasicUserData(userInfo));

//Question 8

function returnCharCount(things){
    // if object
        // loop through props (look at question 6)
        // add together the character length of each string value in the properties of the object
        // if the value in the property is not a string do nothing
    // else (assume array)
        // loop through values
        // add together the character lentgh of each string value in the array
        // if the value of the array is not a string do nothing
    var sumOfCharacters = 0;
    if (!Array.isArray(things)) {
        var properties = (Object.keys(things));
        for (var i = 0; i < properties.length; i++) {
            var value = objectOutput[properties[i]];
            if (typeof value === "string") {
                // sumOfCharacters += value.length;
                sumOfCharacters = sumOfCharacters + value.length;
            }
        }
    } else {
        for (var i = 0; i < things.length; i++){
            if (typeof things[i] === "string"){
                sumOfCharacters += things[i].length;
            }
        }
    }
    return sumOfCharacters;
}


var arrayOutput = ['hello', true, 25, null, undefined, '', 'world'];

var objectOutput = {
    someProp1: true,
    someProp2: null,
    someProp3: "hello",
    someProp4: 88,
    someProp5: "world"
};

console.log(returnCharCount(objectOutput));





// # Second JavaScript Assessment Study Problems
// ​
// ## Problem 1
// ​
// Write a function, ```filterNumbers```, that takes in an array of mixed data types and returns an array of only the number types in ascending order.
//
//     Example input:
//     ​
// ```js
// ["fred", true, 5, 3]
// ```
// ​
// Example output:
//     ​
// ```js
// [3, 5]
// ```
// ​
// ## Problem 2
// ​
// Write a function, ```getOlder```, that takes in an array of dog objects and increases the value of the age properties by 1. No return value is needed since the original array of objects will be changed by this function.
// ​
// Example Input:
//     ​
// ```js
// [
//   {
//     name: "Chompers",
//     breed: "Pug",
//     age: 7
//   },
//   {
//     name: "Freddy",
//     breed: "Lab",
//     age: 4
//   },
//   {
//     name: "Mr. Pig",
//     breed: "Mastif",
//     age: 10
//   }
// ];
// ```
// ​
// Example Output:
//     ​
// ```js
// [
//   {
//     name: "Chompers",
//     breed: "Pug",
//     age: 8
//   },
//   {
//     name: "Freddy",
//     breed: "Lab",
//     age: 5
//   },
//   {
//     name: "Mr. Pig",
//     breed: "Mastif",
//     age: 11
//   }
// ];
// ```
//
// ## Problem 3
// ​
// Write a function, ```washCars```, that takes in a array of car objects and sets the boolean properties of ```isDirty``` to ```false```. Again, no return value is needed since the original array of objects will be changed by this function.
//
// Example Input:
//     ​
// ```js
// [
//   {
//     make: 'Volvo',
//     color: 'red',
//     year: 1996,
//     isDirty: true
//   },
//   {
//     make: 'Toyota',
//     color: 'black',
//     year: 2004,
//     isDirty: false
//   },
//   {
//     make: 'Ford',
//     color: 'white',
//     year: 2007,
//     isDirty: true
//   }
// ]
// ```
//
// Example Output:
//     ​
// ```js
// [
//   {
//     make: 'Volvo',
//     color: 'red',
//     year: 1996,
//     isDirty: false // changed to false
//   },
//   {
//     make: 'Toyota',
//     color: 'black',
//     year: 2004,
//     isDirty: false // stays the same
//   },
//   {
//     make: 'Ford',
//     color: 'white',
//     year: 2007,
//     isDirty: false // changed to false
//   }
// ]
// ```
// ​
// ## Problem 4
//
// Write a function, ```adminList``` that takes in an array of user objects and returns a count of all admins based on the ```isAdmin``` property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
// ​
// Example Input:
//     ​
// ```js
// [
//   {
// 		isAdmin: true,
// 		email: 'user1@email.com'
//   },
//   {
// 		isAdmin: true,
// 		email: 'user2@email.com'
//   }
//   {
//   	isAdmin: false,
//   	email: 'user3@email.com'
//   }
// ];
// ```
// ​
// Example Output (before refactor):
// ​
// ```js
// 2
// ```
// ​
// Example Output (after 1st refactor):
// ​
// ```js
// [
//   'user1@email.com',
//   'user2@email.com'
// ]
// ```
// ​
// Example Output (after 2nd refactor):
// ​
// ```js
// [
//   {
//     isAdmin: true,
//     email: 'user1@email.com'
//   },
//   {
//     isAdmin: true,
//     email: 'user2@email.com'
//   }
// ]
// ```
// ​
// ## Problem 5
// ​
// Create a function, ```makeSandwhichObjects``` that takes in two arrays of strings (breads and fillings) and returns an array of sandwhich objects that contain properties for bread and filling. The values of these sandwich properties should correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length and have no invalid elements.
// ​
// Example Input:
//     ​
// ```js
// var breads = [
//   "white",
//   "wheat",
//   "rhy",
//   "white"
// ];
// ​
// var fillings = [
//   "pb&j",
//   "ham",
//   "cheese steak",
//   "tuna"
// ];
// ​
// makeSandwhichObjects(breads, fillings) // example call to the function
// ```
// ​
// Example Output:
//     ​
// ```js
// [
//   {
//     bread: "white,
//     filling: "pb&j"
//   },
//   {
//     bread: "wheat",
//     filling: "ham"
//   },
//   {
//     bread: "rhy",
//     filling: "cheese steak"
//   },
//   {
//     bread: "white",
//     filling: "tuna"
//   }
// ]
// ```
// ​
// ## Problem 6
// ​
// Create a function, ```firstLettersOfStringProps```, that takes in an object and returns an array of first letters for each property that is a string.
// ​
// Example Input:
//     ​
// ```js
// {
// 	propA: true,
// 	propB: "hello"
// 	propC: 23,
// 	propD: "world"
// }
// ```
// ​
// Example Output:
//     ​
// ```js
// ['h', 'w']
// ```
// ​
// ## Problem 7
// ​
// Create a function, ```returnBasicUserData```, that takes in an array of user objects with an unknown total number of properties in each user object but containing at least a ```name``` and ```age``` property. The function will return a new array of objects that contain only ```name``` and ```age	``` properties and values from the input array of user objects.
// ​
// Example Input:
//     ​
// ```js
// [
// 	{
// 		name: "Fred Smith",
// 		favColor: "Blue",
// 		age: 25
// 	{,
// 	{
// 		name: "Sally Smith",
// 		favPet: "Dogs",
// 		isAdmin: true,
// 		age: 37
// 	{,
// 	{
// 		phoneNumber: "5552759898",
// 		name: "Karen Smith",
// 		age: 19
// 	{
// ]
// ​
// ```
// ​
// Example Output:
//     ​
// ```js
// [
// 	{
// 		name: "Fred Smith",
// 		age: 25
// 	{,
// 	{
// 		name: "Sally Smith",
// 		age: 37
// 	{,
// 	{
// 		name: "Karen Smith",
// 		age: 19
// 	{
// ]
// ​
// ```
// ​
// ## Problem 8
// ​
// Create a function, ```returnCharCount```, that takes in an array or an object and will return the total number of characters for any string elements or string properties.
// ​
// Example 1 Input:
//     ​
// ```js
// ['hello', true, 25, null, undefined, '', 'world']
// ```
// ​
// Example 1 Output:
//     ​
// ```js
// 10
// ```
// ​
// Example 2 Input:
//     ​
// ```js
// {
// 	someProp1: true,
// 	someProp2: null,
// 	someProp3: "hello",
// 	someProp4: 88,
// 	someProp5: "world"
// }
// ```
// ​
// Example 2 Output:
//     ​
// ```js
// 10
// ```