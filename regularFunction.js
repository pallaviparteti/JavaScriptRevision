//A function is a set of statements that take inputs, 
//do some specific computation, and produce output.
function myFunction(firstNumber , secondNumber) {
	return firstNumber  / secondNumber;
}
const value = myFunction(8, 2); // Calling the function
console.log(value);

// Function Expression: 
// It is similar to a function declaration without the function name.
// Function expressions can be stored in a variable assignment. 

//Syntax:

let functValue = function(paramA, paramB) {
    // Set of statements
}
const square = function (number) {
	return number * number;
};
const x = square(4); // x gets the value 16
console.log(x);
