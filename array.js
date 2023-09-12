//-----------------Array-----------
// array is a data structure that can hold a collection of values 
// arrays can contain mix of different dtat types.
// we can store strings , boolean, numbers or even object all in the same array.
// arrays are resizable, we dont need to dclare the size of the array before creating array.

// it is zero-based indexed and it maintains insertion order.
//it is iterable and use with th for of loop.
const array = [10, 2, 3, 6, 33, 25, 21,'pallavi','parteti']

let fruits = ['apple', 'banana', 'cherry'];
//Accessing Elements
let firstFruit = fruits[0]; // 'apple'
let secondFruit = fruits[1]; // 'banana'
//modify elements
fruits[2] = 'grape'; // Now, fruits is ['apple', 'banana', 'grape']

//Adding Elements

// push(): Adds one or more elements to the end of an array.
// unshift(): Adds one or more elements to the beginning of an array.

fruits.push('orange'); // ['apple', 'banana', 'grape', 'orange']
fruits.unshift('kiwi'); // ['kiwi', 'apple', 'banana', 'grape', 'orange']

//Removing Elements

    // pop(): Removes the last element from an array.
    // shift(): Removes the first element from an array.
    // splice(): Removes elements from a specific position in the array.

fruits.pop(); // ['kiwi', 'apple', 'banana', 'grape']
fruits.shift(); // ['apple', 'banana', 'grape']
fruits.splice(1, 1); // Removes 'banana' at index 1

// Concatenating Arrays
// we can combine two or more arrays using the concat() method.
// Combines two or more arrays. 
// This method returns a new array without modifying any existing arrays.


let moreFruits = ['strawberry', 'blueberry'];
let allFruits = fruits.concat(moreFruits); // ['apple', 'banana', 'grape', 'strawberry', 'blueberry']

// slice()
// Returns a copy of a section of an array. For both start and end
// The beginning index of the specified portion of the array. 
//If start is undefined, 
// then the slice begins at index 0.

let slicedFruits = fruits.slice(1, 3); // ['banana', 'grape']

//Iterating through Arrays:

// forEach(): Executes a provided function once for each array element.
// map(): Creates a new array by applying a function to each element in the original array.
// filter(): Creates a new array with all elements that pass a test.
// reduce(): Reduces an array to a single value by applying a function.

fruits.forEach(fruit => console.log(fruit));
let lengths = fruits.map(fruit => fruit.length);
let filteredFruits = fruits.filter(fruit => fruit.startsWith('a'));
let totalLength = fruits.reduce((acc, curr) => acc + curr.length, 0);

//Searching for Elements:
//indexOf(): Returns the index of the first occurrence 
//of a specified element.

//lastIndexOf(): Returns the index of the last occurrence 
//    of a specified element.

//includes(): Checks if an array contains a specified element.
// Determines whether an array includes a certain element, 
// returning true or false as appropriate.
// searchElement — The element to search for.
 //fromIndex — The position in this array at which to begin searching for searchElement.

let index = fruits.indexOf('banana'); // 1
let lastIndex = fruits.lastIndexOf('banana'); // 1
let includesBanana = fruits.includes('banana'); // true

let numbers = [5, 2, 9, 1, 5];
numbers.sort((a, b) => b - a);
console.log(numbers); // [9, 5, 5, 2, 1]

