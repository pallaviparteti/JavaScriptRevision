// Higher Order Function
// A functions which takes another function as an arguments and returns
// a function from it is known as higher order function.
//call back function
function x() {
  console.log("higher order function");
}
// y is the higher order function
function y(x) {
  x();
}

//examples:-
const radius = [2, 3, 4, 5];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const result = [];
  for (let i = 0; i < radius.length; i++) {
    result.push(logic(radius[i]));
    return result;
  }
};
console.log("area------------->", calculate(radius, area));
console.log("circumference---->", calculate(radius, circumference));
console.log("diameter--------->", calculate(radius, diameter));

//------Map()------
//   map() function is used to transform each element of an array
//  map() function iterates through the original array,
// applies the provided callback function to each element,
// and collects the transformed values into a new array.
const array = [5, 1, 3, 2, 6];

//to doubles the value
function double(x) {
  return x * 2;
}
const output = array.map(double);
console.log(output);

//example
const arr = ["hi", "i", "am", "learning", "jsBasics"];

function returnString(arr) {
  return arr;
}
const strValue = arr.map(returnString);
console.log(strValue);
//or
const stringValue = arr.map((arr) => {
  return arr;
});
console.log(stringValue);

//example
const users = [
  {
    firstName: "pallavi",
    lName: "kokate",
    age: 23,
  },
  {
    firstName: "pallavi",
    lName: "parteti",
    age: 24,
  },
  {
    firstName: "jay",
    lName: "jagdish",
    age: 25,
  },
  {
    firstName: "athrva",
    lName: "parteti",
    age: 26,
  },
];
//log the fullname
const fullName = users.map((x) => x.firstName + x.lName);
console.log(fullName);
//-------filter--------------
//The filter() function takes an array and returns a new array with only the
// values that meet certain criteria. It also does not mutate the original array.
// It is often used to select a subset of data from an array based on certain criteria.
//we can use filter to select a subset of data from an array.

const arrayNumber = [10, 9, 2, 3, 6, 8, 20, 7];

//to filter the even numbers
const filterValue = arrayNumber.filter((x) => x % 2 === 0);
console.log(filterValue);

//reduce()
// reduce() method, we should is used it when we want to perform some operation
// on the elements of an array and return a single value as a result.
//sum or max
const sumValue = arrayNumber.reduce((sum, value) => {
  return (sum = sum + value);
}, 0);
console.log("sum of value-------->", sumValue);

const reduceOutput = arrayNumber.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log("max value is----------->", reduceOutput);

// forEach()

// The forEach() function iterates through an array and executes a
// provided function on each element of the array. It doesn't create a new array;
// instead, it's used for performing actions on each element.
const usersInfo = [
  {
    firstName: "pallavi",
    lName: "kokate",
    age: 23,
  },
  {
    firstName: "pallavi",
    lName: "parteti",
    age: 24,
  },
  {
    firstName: "jay",
    lName: "jagdish",
    age: 25,
  },
  {
    firstName: "athrva",
    lName: "parteti",
    age: 26,
  },
];
const info = usersInfo.forEach((user) => {
  return user.age > 20;
});
