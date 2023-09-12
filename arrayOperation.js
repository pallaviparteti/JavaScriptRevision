//Search Operation:

// In an unsorted array,
// the search operation can be performed by linear traversal
// from the first element to the last element.
const array = [10, 3, 2, 20, 33, 11, 5];
function searchElement(array, element) {
  for (let i of array) {
    if (array[i] == element) {
      return 1;
    }
  }
  return -1;
}

let element = 11;
console.log(searchElement(array, element));
