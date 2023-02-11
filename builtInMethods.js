// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");
// the .includes method is called on part of the string "Hello World"
// No arguments are passed; .includes() has one clear job which is to identify whether or not the string includes "Hello".
// The Return value is "true"

"Hello World".endsWith("Hello");
// The .endswith() method is called on part of the string "Hello World"
// This is used to identify whether the string ends with "Hello", which it does not.
// The return value is False


"Hello World".endsWith("rld");
// this is the same method as before, called upon part of the string "Hello World."
// This is used to identify whether the string ends with "rld", which it does.
//The Return value is True.



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// the charAt method is called on the favoriteColor variable, which identifies the character in the specified index position of the string.
// In this case, the return value is "n", because it is the 5th letter in the string "Green", so it would take 4 index jumps to get there.
// The console.log() statement prints the return value, "n".
var favoriteColor = "Green"
console.log(favoriteColor.charAt(4));

var statement = "Whoever said money doesn't buy happiness has clearly never won the lottery."
console.log(statment.replaceAll("won the lottery", "used their money to purchase a puppy"));
// the .replaceAll method is used to replace all instances of a specified part of a string with a specified alternative, every time it reoccurs.
// in this case, the .replaceAll method has changed initial string/variable assignment to a completely different sentence, in this case "won the lottery" is changed to "used their money to purchase a puppy".
// the return value is "Whoever said money doesn't buy happiness has clearly never used their money to purchase a puppy"





// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var numbers = [1, 2, 3, 4, 5]
console.log(numbers.includes(4));
// the .includes method is used to determined whether or not a specific value is present.
// The return vaue is true because this array does include the number 4.

var numbers = [1, 2, 3, 4, 5]
console.log(numbers.includes(4));

// The .find method is used to isolate an element(s) that satisfies the listed criteria.
// The criteria here state that we are looking for an elements that must be greater than 400, but are exceeded by the values of other elements in the array.
// The return value isolates only one ticket, which is the one that costs $489.

var ticketPrices = [330, 378, 489, 900, 815]
var found = ticketPrices.find(element => element > 400)
console.log(found);
