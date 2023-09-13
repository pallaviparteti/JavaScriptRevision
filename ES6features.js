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
        name: 'pallavi'
    };
    person.name = 'parteti'; // This is allowed
    console.log(person.name); // Outputs 'parteti'
}

function constExample() {
    const pi = 3.14159;
    // pi = 3.14; // Error: Assignment to constant variable
    console.log(pi); // Outputs 3.14159
}
constExample();