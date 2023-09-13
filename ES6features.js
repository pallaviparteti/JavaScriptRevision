//ECHMASCRIPT---it is a standardization for creating a scripting language.
//example javascript
//ES6 Features----->
// ES6 introduced several key features like const, let, arrow functions,
// template literals, default parameters,Object and Array Desctructuring,Classes,Rest parameter and spread operator
//const:-
// const is considered to be more powerful than var.
// Once used to store a variable it can’t be reassigned.
// it is an immutable variable except when used with objects.
function exampleConst() {
  const z = 30;
  // z = 40; // Error: Assignment to constant variable

  //Example
  const person = {
    name: "pallavi",
  };
  person.name = "parteti"; // This is allowed
  console.log(person.name); // Outputs 'parteti'
}

function constExample() {
  const pi = 3.14159;
  // pi = 3.14; // Error: Assignment to constant variable
  console.log(pi); // Outputs 3.14159
}
constExample();

//let:

// Variables declared with let are block-scoped, meaning they are only accessible within the block (a pair of curly braces) in which they are defined.
// let doesn't allow redeclaration within the same scope, but it does allow reassignment.

//Example

function exampleLet() {
  if (true) {
    let y = 20;
    console.log(y); // Outputs 20
  }
  // console.log(y); // Error: y is not defined outside the block scope
}

// let have a block scope
//Example
function blockScope() {
  if (true) {
    let x = 5;
    console.log(x); // Outputs 5
  }
  // console.log(x); // Error: x is not defined outside the block scope
}
blockScope();

// Object using let
let studentInfo = {
  name: "pallavi",
  branch: "CSE",
  clg: "PRMITR",
};

console.log(studentInfo.branch); // CSE

studentInfo.branch = "NONE";
console.log(studentInfo.branch); // NONE

//Arrow function {()=>} is concise way of writing Javascript functions in shorter way.
// Arrow functions are anonymous functions i.e. functions without a name and are not bound by an identifier. Arrow functions do not return any value and can be declared without the function keyword. They are also called Lambda Functions.

// Syntax:

const arrow = () => {
    console.log("Arrow Function!");
  };
  //arrow function with parameter
  const number = (x, y, z) => {
    console.log(x + y + z);
  };
  
  number(10, 20, 30);
  
  //arrow function with default parameter
  const addNumber = (x, y, z = 30) => {
    console.log(x + " " + y + " " + z);
  };
  
  addNumber(10, 20);
  
  