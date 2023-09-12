// Arrow functions was introduced in ES6.
// And it introduced a simple and shorter way to create functions.
//The arrow functions are introduced in the ES6 version. Arrow functions enable us to write functions with 
//simpler and shorter syntax and make our code more readable and organized.
// Arrow functions are anonymous functions i.e. 
// they are functions without a name and are not bound by an identifier.
//  Arrow functions do not return any value and can be declared without the function keyword. They are also called Lambda Functions.

//     Arrow functions do not have the prototype property like this, arguments, or super.
//     Arrow functions cannot be used with the new keyword.
//     Arrow functions cannot be used as constructors.
//syntax:
let function_name = (argument1, argument2) => expression
// Normal function for multiplication
// of two numbers
function multiply(a, b) {
	return a * b;
}
console.log(multiply(3, 5));

// Arrow function for multiplying two numbers
value = (a, b) => a * b;
console.log(value(3, 5));
//
number = (a, b) => {
	c = 5;
	return (a + b) * c;
};
console.log(number(2, 3));

//
// Initializing an array of strings
let array = ["samiksha", "samar", "jay"];

// Map function used to find the length of strings
let lengths = array.map((string) => string.length);

console.log(lengths);

