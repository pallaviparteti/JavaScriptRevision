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

//Template literals

// Template Literal in ES6 provides new features
// to create a string that gives more control over dynamic strings.
//  Traditionally, String is created using single quotes (‘) or double quotes (“) quotes.
//  Template literal is created using the backtick (`) character.

// Syntax:

var s = `hello world`;

// Multiline Strings: In-order to create a multiline string an escape sequence
//  \n was used to give new line character.
// Template Literals there is no need to add \n string ends only when it gets backtick (`) character.

// Without template literal
console.log("to gain knowledge  \n hard work , and preparations is needed!");

// With template literal
console.log(`to gain knowledge hard work
  and preparations is needed!`);
// Expressions: To dynamically add values into new Template Literals expressions are used.
// The ${} syntax allows an expression in it that produces the value.

//   Object and Array Desctructuring

//   Destructing in javascript basically means the breaking down of a complex structure(Objects or arrays)
//   into simpler parts.

// object destructuring
// ES6
const college = {
  clgName: "PRMITR",
  established: "1981",
  isPrivate: false,
};

let { clgName, established, isPrivate } = college;

console.log(clgName); // PRMITR
console.log(established); // 1981
console.log(isPrivate); // false

//Array Destructuring

const arr = [
  "hello",
  "javascript",
  "you",
  "are",
  "simplest",
  "imakes",
  "difficult",
];
const [value1, value2, value3, value4] = arr;
console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);

// Default Parameters

// Default parameters allow you to define a parameter in advance.

// ES6
function fun(a, b = 1) {
  return a + b;
}

console.log(fun(2, 1)); // 3
console.log(fun(2)); // 3

// Classes

// Classes are the core of Object-Oriented programming(OOPs).
// ES6 introduced classes in javascript.
// Classes in javascript can be used to create new Objects with the help of a constructor,
// each class can only have one constructor inside it.

// class classname {
//   constructor(parameter) {
//     this.classname = parameter;
//   }
// }
//example
// class Student {
//   constructor(nameOfStudent, trackScrore) {
//     this.nameOfStudent = nameOfStudent;
//     this.trackScrore = trackScrore;
//   }
// }
// const stdObj = new Student("pallavi", 0);
// const stdObj1 = new Student("any",4);
// console.log(stdObj.nameOfStudent);
// console.log(stdObj.trackScrore);

// Rest parameter and spread operator

// Rest Parameter: The rest parameter syntax allows us to represent an indefinite number of arguments
// as an array. With the help of a rest parameter,
// a function can be called with any number of arguments, no matter how it was defined.
// ES6 rest parameter
Syntax: function fun(...input) {
  let sum = 0;
  for (let i of input) {
    sum += i;
  }
  return sum;
}

console.log(fun(1, 2)); // 3
console.log(fun(1, 2, 3)); // 6
console.log(fun(1, 2, 3, 4, 5)); // 15

// Spread Operator: The Spread operator provided by
//  ES6 that allows us the privilege to obtain a list of parameters from an array.
// It is mostly used in the variable array where there is more than 1 value is expected.
// It allows us the privilege to obtain a list of parameters from an array.
// Spread operator can be used in many cases,
// like when we want to expand, copy, concat, with math object.

//
//spread operator doing the concat job
let arr1 = [1, 2, 3];
let arr2 = [4, 5];

concatArr = [...arr1, ...arr2];
console.log(concatArr); // [ 1, 2, 3, 4, 5 ]

//// spread operator for copying
let array = ["a", "b", "c"];
let array2 = [...array];

console.log(array);
// [ 'a', 'b', 'c' ]

array2.push("d");
//inserting an element at the end of arr2

console.log(array2);
// [ 'a', 'b', 'c', 'd' ]
console.log(array);
// [ 'a', 'b', 'c' ]

//promise

const promise = new Promise((resolve, reject) => {
  let number = 20;
  setTimeout(() => {
    if (number % 10 == 0) {
      resolve("number divisible by 10");
    } else {
      reject("number is not divisible by 10");
    }
  }, 3000);
});

function print() {
  // console.log( await promise)
  // // return promise.then((message)=>{
  // //     console.log(message);
  // // }).catch((error)=>{
  // //     console.log(error);
  // // })
  return promise;
}

async function returnPromise() {
  const value = await print();
  console.log(value);
}
returnPromise();

//ES7 features
// Array.prototype.includes():

// The includes() method simplifies array element searching.
// It allows you to check if an array contains a specific element and returns a Boolean value.
const ar = ["this", "that", "their", "them"];
console.log(ar.includes("this")); // true
console.log(ar.includes(4)); // false

// Exponentiation Operator (**):

// The exponentiation operator ** provides a concise way to calculate exponentiation.
//  It replaces the Math.pow() method, which can be cumbersome to use in certain cases.

console.log(2 ** 3); // Output: 8
console.log(4 ** 0.5); // Output: 2

// ES8 Features
// Async/Await:

// Async functions and the await keyword simplify asynchronous programming.
// They allow you to write asynchronous code that looks synchronous,
// making it easier to reason about and maintain.
// Async functions automatically wrap return values in promises,
// and the await keyword suspends the execution of the function until the promise is resolved.

const promise1 = new Promise((resolve, reject) => {
  const stringValue = "pass";
  if (stringValue === "fail") {
    resolve("you have cleared the test");
  } else {
    reject("you have failed the test");
  }
});
function aysncFunction() {
  return promise1;
}

async function printPromise() {
  try{
  const resultValue = await aysncFunction();
  console.log(resultValue);
}catch(error){
  console.log(error)
}
}
printPromise();

//Object.values() and Object.entries():

// These new Object methods make it easier to iterate over object properties.
// Object.values() returns an array of the object’s enumerable property values,
//  while Object.entries() returns an array of key-value pairs.

const user = {
  name: "payal jain",
  age: 23,
  email: "payaljain@gmail.com",
};
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(Object.keys(user));

