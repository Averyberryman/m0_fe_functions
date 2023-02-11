// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting() {
    return 'Hello, User!'
} 

var greeting1 = greeting();
var greeting2 = greeting();

console.log(greeting1);
console.log(greeting2);



// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name) {
    return `Hello, ${name}, how is your day going?`;;
}

var customGreeting1 = customGreeting("Jack");
var customGreeting2 = customGreeting("Jeremy")

console.log(customGreeting1);
console.log(customGreeting2);



// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, middle, last) {
    return `Hello, ${first} ${middle} ${last}!`;
}
var greetPerson1 = greetPerson("Lily", "Brent", "Berryman",);
var greetPerson2 = greetPerson(`Avery`, `Hilton`, `Berryman`);

console.log(greetPerson1);
console.log(greetPerson2);

            
// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(number) {
    var sum = number * number
    return `the square of ${number} is ${sum}`
  }
  
  var sum1 = square(8);
  var sum2 = square(10);

  console.log(sum1);
  console.log(sum2);

  
  
  

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
function checkStock(num, item) {
    if (num > 3) {
    return `${item} is stocked`;  
    } else if (num === 0) {
    return `${item} - OUT of stock!`;
    } else {
    return `${item} - running LOW`;
    }
}
var coffee = checkStock(4, "Coffee")
var tortillas = checkStock(3, "Tortillas")
var cheese = checkStock(0, "cheese")
var salsa = checkStock(1, "Salsa")

console.log(coffee)
console.log(tortillas)
console.log(cheese)
console.log(salsa)


checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"