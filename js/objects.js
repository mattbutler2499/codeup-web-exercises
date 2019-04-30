(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {};
    person.firstName = "Matthew";
    person.lastName = "Butler";
    person.sayHello = "Hello from" + ' ' + person.firstName + " " + person.lastName + "!";

    console.log(person.firstName);
    console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    //
    // person.sayHello = function(){
    //   return "Hello from " + this.firstName + ' ' + this.lastName + '!';
    // };
    //
    // console.log(person.sayHello);


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    alert("If you spend more than 200 dollars at the store today you will receive a 12% discount off of your purchase!")
    function discountOffer200(shopper) {
        var discount = .12;
        var totalForDiscount = 200;
        var discountedAmount = 0;
        var needsToSpend = 0;
        var amountOwed;


        if (shopper.amount > 200) {
            discountedAmount = shopper.amount * discount;
            amountOwed = shopper.amount - discountedAmount;
            console.log(shopper.name + "'s bill is $" + shopper.amount + " and saved $" + discountedAmount + " and only owes $" + amountOwed);
        } else {
            needsToSpend = totalForDiscount - shopper.amount;
            console.log(shopper.name + " does not qualify for the discount. They need to spend $" + needsToSpend + " more to get the discount.");
        }
        // if (shoppers[0].amount < 200) {
        //     console.log(shoppers[0].name + " needs to spend $" + (totalForDiscount - shoppers[0].amount).toFixed(2) + " more dollars in order to receive our discount!")
        // } else if (shoppers[1].amount > 200) {
        //     console.log("Congratulations " + shoppers[1].name + "!" + " since you spent $" + (shoppers[1].amount).toFixed(2) + " you are eligible for our discount! Your total saved is " + "$" + (shoppers[1].amount * discount).toFixed(2) + " and your new total comes out to " + "$" + (shoppers[1].amount - (shoppers[1].amount * discount)).toFixed(2) )
        // } else if (shoppers[2].amount > 200) {
        //     console.log("Congratulations " + shoppers[2].name + "!" + " since you spent $" + (shoppers[2].amount).toFixed(2) + " you are eligible for our discount! Your total saved is " + "$" + (shoppers[2].amount * discount).toFixed(2) + " and your new total comes out to " + "$" + (shoppers[2].amount - (shoppers[2].amount * discount)).toFixed(2) )
        // }
    }

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    console.log(shoppers.forEach(discountOffer200));

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    // shoppers.forEach(function (shopper) {
    //     console.log(shoppers);
    // });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {title: "Treasure Island",
         author: {
            firstName: "Robert",
            lastName: "Stevenson"
         }
        },
        {title: "Lone Survivor",
            author: {
                firstName: "Chris",
                lastName: "Kyle"
            }
        },
        {title: "Band of Brothers",
            author: {
                firstName: "Stephen",
                lastName: "Ambrose"
            }
        },
        {title: "20,000 Leagues Under the Sea",
            author: {
                firstName: "Jules",
                lastName: "Verne"
            }
        },
        {title: "Robinson Crusoe",
            author: {
                firstName: "Daniel",
                lastName: "Defoe"
            }
        }
    ];

    console.log(books[3].title);
    console.log(books[3].author.firstName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */



    var listBooks = function () {
        for (var i = 0; i < books.length; i++){
            console.log("Book # " + [i + 1] + "\n" + "Title: " + books[i].title + "\n" + "Author: " + books[i].author.firstName + " " + books[i].author.lastName + "\n" + "---");
        }
    };

    listBooks();



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    // function createBook(title, author) {
    //     return books[1].title;
    //     return books[1].author;
    // }
    //  createBook();


})();
