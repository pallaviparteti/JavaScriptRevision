//-----------Map()------------------
// The map is a collection of elements where each element is stored as a Key,
// value pair.
// Map objects can hold both objects and primitive values as
// either key or value.
// When we iterate over the map object it returns the key,
// and value pair in the same order as inserted.
// Map() constructor is used to create Map in JavaScript.
let map1 = new Map([
  [1, 2],
  [2, 3],
  [4, 5],
]);
console.log(map1);

// The map.set() method is used to add key-value pairs to a Map object.
// It can also be used to update the value of an existing key.
// Each value must have a unique key so that they get mapped correctly.

let map = new Map();

// Adding a key value pair
map.set(1, "looser");

// Getting the value by key
console.log(map.get(1));

// Updating the existing value
map.set(1, "winner");

// Getting the value back
console.log("get value-------->", map.get(1));

//add multiple values key value pair in chaining
console.log(
  map
    .set(2, "javascript")
    .set(3, "node js")
    .set(4, "express js")
    .set(5, "backend")
);

// Adds a key-value pair to the Map.
const myMap = new Map();
myMap.set("name", "pallavi");
myMap.set("age", 23);

//2. get(key) Method:
//Retrieves the value with a specific key.
console.log(myMap.get("name")); // 'pallavi'
console.log(myMap.get("age")); // 23

//3. has(key) Method:
//Checks if a key exists in the Map.
console.log(myMap.has("name")); // true
console.log(myMap.has("lName")); // false

//4. delete(key) Method:
//Removes a key-value pair from the Map.
myMap.delete("age");
console.log(myMap.has("age")); // false

//5. size Property:
//Returns the number of key-value pairs in the Map

console.log(myMap.size); // 1

//Map.clear() method is used for the removal of all the elements
// from a map and making it empty.
//  It removes all the [key, value] from the map.
// creating a map object
let newMap = new Map();

// Adding [key, value] pair to the map
newMap.set(0, "hi");
newMap.set(1, "hello");
newMap.set(2, "good");
newMap.set(3, "evening");
console.log(newMap.size);

// removing the [key, value] pairs of
// the map using Map.clear() method
newMap.clear();

console.log(newMap.size);

// 6.keys() Method:
// Returns an iterator for the keys in the Map.

const keysIterator = myMap.keys();
for (const key of keysIterator) {
  console.log(key); // 'name'
}

//7. values() Method:
//Returns an iterator for the values in the Map.

const valuesIterator = myMap.values();
for (const value of valuesIterator) {
  console.log(value); // 'pallavi'
}

//8. entries() Method:
//  Returns an iterator for key-value pairs (entries) in the Map.
const entriesIterator = myMap.entries();
for (const [key, value] of entriesIterator) {
  console.log(key, value); // 'name' 'pallavi'
}
