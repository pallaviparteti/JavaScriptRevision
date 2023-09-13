//-----------------closure---------------
// closure is created when a child function keep the environment of the parent scope
// even after the parent function has already executed.
//Closure is the concept of function + lexical environment in which function it was created.

// Lexical Scoping: A function scope’s ability to access variables
// from the parent scope is known as lexical scope.

//example
const data = "string"
function print() {
  let number = 10;
  function printable() {
    console.log(number);
    console.log(data)
    console.log(str)
  }
  let str = "LEXICAL SCOPE"
  printable();
  
}
print();
//example
function createAdder() {
    let sum = 0;
  
    function add(number) {
      sum += number;
      console.log(`Current sum: ${sum}`);
    }
  
    return add;
  }
  
  const adder = createAdder();
  
  adder(5); // Outputs: Current sum: 5
  adder(10); // Outputs: Current sum: 15
  adder(3); // Outputs: Current sum: 18
    

