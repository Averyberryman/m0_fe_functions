// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:

function askForName() { 
  console.log("Hello, what is your name?");
}
 
askForName()

// In this example, I simply modified the code so that the code block followed the conventional structure.



// EX 2:

function addThreeNums(first, second, third) {
  var sum = (first + second + third);
  return sum;
}
  
  console.log (addThreeNums(1, 2, 3));
  console.log (addThreeNums(4, 2, 7));
  // This code was incomplete because we needed to call on the function which required an extra set of parentheses.


// EX 3:

function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

// This function was just incomplete as it was labeled "func" which failed to intiate the code.


//  EX 4:

function average(num1, num2); 
  {
var sum = num1 + num2;
    var avg = sum / 2;
return avg
  }
  console.log (average(78, 97));

  // This function was fine on its own but wasn't printing to the console until I entered numerical values to demonstrate it. 
  // I added 78, 97 to see if the average was correct.
