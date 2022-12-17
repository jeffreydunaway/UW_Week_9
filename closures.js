// Example
const createCounter = () => {
  let count = 0;
  const getCount = () => count;
  const increaseCount = () => count++;
  return {
    getCount,
    increaseCount
  };
};
const counter = createCounter();
counter.increaseCount();
console.log(counter.getCount());
// 1
// Exercise:
// This function should create an empty array of messages, and should then
// return an object with the following methods:
// - addMessage method that adds a message to the array
// - getMessage(index) method that returns the message at index index
const createMessageHolder = () => {
  //Create an empty array
  const messages = []
  //Define method that adds a message to the array
  const addMessage = (newMessage) => {
    messages.push(newMessage)
  }
  //Define method that returns the message at index index
  const getMessage = (i) => messages[i]
  //Return the private array and the two methods to interact with it
  return {messages, addMessage, getMessage}
};
// Test
const messageHolder = createMessageHolder();
messageHolder.addMessage('Hello!');
messageHolder.addMessage('Goodbye!');
console.log(messageHolder.getMessage(0));
// "Hello!""
// Example: non-currying
const addNumbers = function(num1, num2) {
  return num1 + num2;
};
console.log(addNumbers(5, 3));
// 8
// Example: currying
const addToNumber = function(num1) {
  const addToFirst = function(num2) {
    return num1 + num2;
  };
  return addToFirst;
};
const addThree = addToNumber(3);
console.log(addThree(9));
// 12
console.log(addThree(41));
// 44
// Create a function createGreeting
// - This should accept a single argument: greeting (i.e. "Hello")
// This will return a function a function greet
// - This accepts a single argument, name (i.e. "Matt")
// - This function should return the greeting combined with the name, (i.e. "Hello Matt")

const createGreeting = function(greeting) {

  //Create a function that takes a name input and outputs a string with the greeting and the name.
  const greet = (name) => `${greeting}, ${name}!`

  //Return the function
  return greet
};

// Test
const welcomeGreet = createGreeting('Welcome');
console.log(welcomeGreet('Alice'));
const helloGreet = createGreeting('Hello');
console.log(helloGreet('Winnie'));
