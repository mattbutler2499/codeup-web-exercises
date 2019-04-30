"use strict";

function renderCoffee(coffee) {
    var html = '<div id="'+ coffee.id +'" data-toggle="modal" onclick="createModal(this)" data-target="#exampleModalScrollable" class="coffee">';
    html += '<h2  class="d-inline">' + coffee.name + ' ' + '</h2>';
    html += '<p class="d-inline text-muted">' + ' ' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}
function createModal(input) {
    var heading = document.getElementById('modalTitle');
    var coffeeOrigin = document.getElementById('coffeeOrigin');
    var tastingNotes = document.getElementById('tastingNotes');
    var imgDiv = document.getElementById('imgDiv');
    var inputid = input.id;
    console.log(input);
    coffees.forEach(function(coffee){
        if (coffee.id == inputid){
            heading.innerText = coffee.name;
            imgDiv.src = coffee.img;
            coffeeOrigin.innerText = coffee.origin;
            tastingNotes.innerText = coffee.taste;
        }
    })
}
/*

function coffeeData() {
    var firstCoffee = document.getElementById('1');
    console.log(firstCoffee);
    /!*document.getElementById('exampleModalScrollableTitle').innerText = firstCoffee*!/
}

*/

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
var coffees = [
    {id: 1, name: 'Light City',
        roast: 'light',
        origin: 'Ethiopia',
        taste: 'Taste notes: Milk chocolate, apricot jam, dulce de leche, passion fruit, & pumpkin pie spice. Creamy, velvety mouthfeel with medium body & an approachable white peach malic acidity. Hints of apple & pineapple juice on the linger.',
        img: 'img/lightcity.jpg'

    },
    {id: 2, name: 'Half City'
        , roast: 'light',
        origin: 'Ethiopia',
        taste: 'On the nose: citrus, sweet sugared pineapple. Taste: Meyer lemon, fresh red currant, cane sugar, & hints of pineapple juice. Delicate & Fruity. A stunning flavor profile you\'ll absolutely love in any preparation.',
        img:'img/halfcity.jpg',
    },
    {id: 3, name: 'Cinnamon',
        roast: 'light',
        origin: 'Indonesia',
        taste: 'Taste notes: beautiful & unique coffee with red currant acidity atop a smooth bakers chocolate base.',
        img:'img/cinnamon.jpg',
    },
    {id: 4, name: 'City',
        roast: 'medium',
        origin: 'Guatemala',
        taste: 'Taste: Rich creamy milk chocolate, sweet fruit notes of strawberry, blackberry, golden raisin, mandarin orange, & slight rum as it cools.',
        img:'img/city.jpg',
    },
    {id: 5, name: 'American',
        roast: 'medium',
        origin: 'Hawaii',
        taste: 'Complex, multi-layered, spice-toned. Coconut, blackberry, ginger blossom, wild honey, dark chocolate in aroma and cup. The structure is sweet, tart and savory in balance with juicy, bright acidity; plush, syrupy mouthfeel.',
        img:'img/america.jpg',
    },
    {id: 6, name: 'Breakfast',
        roast: 'medium',
        origin: 'Costa Rica',
        taste: 'Brown sugar, lavender, blueberry, dark rum, banana liqueur, strawberry, hints of marmalade, grape juice, & almond biscotti.',
        img:'img/bfast.jpg',
    },
    {id: 7, name: 'High',
        roast: 'dark',
        origin: 'Kenya',
        taste: 'Almond brittle, Fuji apple, creamy Dulce de Leche, milk chocolate, red grape, fruit tones of apricot & pineapple. Overall rich and round with crisp malic acidity.',
        img:'img/high.jpg',
    },
    {id: 8, name: 'Continental',
        roast: 'dark',
        origin: 'Latin America',
        taste: 'Spiced apple pie, plum pudding, almond brittle, maple syrup, & allspice. Great medium body complemented with a silky Red Anjou pear acidity coming through. This pulped natural process coffee is truly exquisite.',
        img:'img/continental.jpg',
    },
    {id: 9, name: 'New Orleans',
        roast: 'dark',
        origin: 'New Orleans',
        taste: 'Spiced apple pie, plum pudding, almond brittle, maple syrup, & allspice. Great medium body complemented with a silky Red Anjou pear acidity coming through. This pulped natural process coffee is truly exquisite.',
        img:'img/neworleans.jpg',
    },
    {id: 10, name: 'European',
        roast: 'dark',
        origin: 'Netherlands',
        taste: 'Taste notes: beautiful & unique coffee with red currant acidity atop a smooth bakers chocolate base.',
        img:'img/euro.jpg',
    },
    {id: 11, name: 'Espresso',
        roast: 'dark',
        origin: 'Global',
        taste: 'Taste notes: Milk chocolate, apricot jam, dulce de leche, passion fruit, & pumpkin pie spice. Creamy, velvety mouthfeel with medium body & an approachable white peach malic acidity. Hints of apple & pineapple juice on the linger.',
        img:'img/espresso.png',
    },
    {id: 12, name: 'Viennese',
        roast: 'dark',
        origin: 'Italy',
        taste: 'Almond brittle, Fuji apple, creamy Dulce de Leche, milk chocolate, red grape, fruit tones of apricot & pineapple. Overall rich and round with crisp malic acidity.',
        img:'img/vienna.png',
    },
    {id: 13, name: 'Italian',
        roast: 'dark',
        origin: 'Italy',
        taste: 'Almond brittle, Fuji apple, creamy Dulce de Leche, milk chocolate, red grape, fruit tones of apricot & pineapple. Overall rich and round with crisp malic acidity.',
        img:'img/italian.jpg',
    },
    {id: 14, name: 'French',
        roast: 'dark',
        origin: 'France',
        taste: 'On the nose: citrus, sweet sugared pineapple. Taste: Meyer lemon, fresh red currant, cane sugar, & hints of pineapple juice. Delicate & Fruity. A stunning flavor profile you\'ll absolutely love in any preparation.',
        img:'img/french.jpg',
    },
];

var filteredCoffeesForFiltering = coffees;

function updateCoffees(e) {
    /*e.preventDefault();*/ // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === "all"){
            filteredCoffees = coffees;
            filteredCoffeesForFiltering = coffees;
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
    filteredCoffeesForFiltering = filteredCoffees;
    return filteredCoffeesForFiltering
}

function fuckBitchesGetMoney() {
    var coffeeSearch = document.getElementById("coffeename").value;
    var searchFilteredCoffee= [];
    filteredCoffeesForFiltering.forEach(function(coffee){
        if (coffee.name.toLowerCase().includes(coffeeSearch.toLowerCase())){
            searchFilteredCoffee.push(coffee)
        }
    });
    tbody.innerHTML = renderCoffees(searchFilteredCoffee);
}

function addCoffee() {
    var newRoast = document.getElementById("inputGroupSelect01").value;
    var oldCoffeeInput = document.getElementById("newCoffeeName").value;
    var middleCoffeeInput = oldCoffeeInput.split(' ');
    for (var i=0; i<middleCoffeeInput.length; i++){
        middleCoffeeInput[i] = middleCoffeeInput[i].charAt(0).toUpperCase() + middleCoffeeInput[i].slice(1);
    }
    var newCoffeeInput = middleCoffeeInput.join(' ');
    var newCoffee = {};
        newCoffee.id=coffees.length + 1;
        newCoffee.name=newCoffeeInput;
        newCoffee.roast=newRoast;
        coffees.push(newCoffee);
        newCoffee.img = "https://via.placeholder.com/150\n" +
            "\n" +
            "C/O https://placeholder.com/";
        newCoffee.origin = 'The land of the ice and snow';
        newCoffee.taste = 'Scrumdidlyumptious';
        tbody.innerHTML = renderCoffees(coffees);
}


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#addCoffee');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', addCoffee);


/*

function makeModal() {
  for (var i=0; i<coffees.length; i++) {
    var modalDivTop = document.createElement('div');
    modalDivTop.setAttribute('class', 'modal fade');
    modalDivTop.setAttribute('id', 'exampleModalScrollable');
    modalDivTop.setAttribute('tabindex', '-1');
    modalDivTop.setAttribute('role', 'dialog');
    modalDivTop.setAttribute('aria-labelledby', 'exampleModalScrollableTitle');
    modalDivTop.setAttribute('aria-hidden', 'true');
    var modalDivRoleDocument = document.createElement('div');
    modalDivRoleDocument.setAttribute('class', 'modal-dialog modal-dialog-scrollable');
    modalDivRoleDocument.setAttribute('role', 'document');
    var modalDivContent = document.createElement('div');
    modalDivContent.setAttribute('class', 'modal-content');
    var modalDivHeader = document.createElement('div');
    modalDivHeader.setAttribute('class', 'modal-header');
    var modalh5 = document.createElement('h5');
    modalh5.setAttribute('class', 'modal-title');
    modalh5.setAttribute('id', 'exampleModalScrollableTitle');
    var modalBody = document.createElement('div');
    modalBody.setAttribute('class', 'modal-body');
    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'close');
    button.setAttribute('data-dismiss', 'modal');
    button.setAttribute('aria-label', 'Close');
    modalDivHeader.appendChild(button);
    var buttonSpan = document.createElement('span');
    buttonSpan.setAttribute('aria-hidden', 'true');
    var buttonText = 'X';
    buttonSpan.append(buttonText);
    button.appendChild(buttonSpan);
    var modal = document.getElementById('modal');
    modal.appendChild(modalDivTop);
    modalDivTop.appendChild(modalDivRoleDocument);
    modalDivRoleDocument.appendChild(modalDivContent);
    modalDivContent.appendChild(modalDivHeader);
    modalDivContent.appendChild(modalBody);
    modalDivHeader.appendChild(modalh5);

    }
}
*/

mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGJ1dGxlcjI0OTkiLCJhIjoiY2p1anY0M3JzMDF1NDQ0czEzaGdqMXpociJ9.fP70VfqbTfe1PpT348UXQw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 8,
    center: [-98.4870, 29.4284]
});

