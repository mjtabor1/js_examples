

// Callbacks - a function that takes another function as a parameter

function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// greet("Michael", () => {
//   console.log("This is a callback function!");
// });


// Example of a callback with parameters

function calculate(a, b, operation) {
  const result = operation(a, b);
  console.log(`The result of the operation is: ${result}`);
}

function add(x, y) {
  return x + y;

}

function multiply(x, y) {
  return x * y;
}

// calculate(5, 3, add);
// calculate(5, 3, multiply);

// example anonymous callback function
function processArray(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

// processArray([10, 20, 30], (element, index) => {
//   console.log(`Element at index ${index} is ${element}`);
// })

// Simulating Async Behavior 
function fetchUserData(userId, callback) {
  console.log('Fetching user data for ID: ' + userId);

  // Simulating a delay like a network request
  setTimeout(() => {
    const userData = {
      id: userId,
      name: 'User' + userId,
      email: 'user' + userId + '@example.com'
    }
    callback(userData);
  }, 2000);
}

// console.log("Start")

// fetchUserData(42, function(data) {
//   console.log("User data received: ");
//   console.log(data);
// })

// console.log("Request sent, waiting...")

function processNames(names, filterCallback, transformCallback) {
  const result = [];
  for (let name of names) {
    if (filterCallback(name)) {
      result.push(transformCallback(name));
    }
  }
  return result;
}

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

const processed = processNames(
  names,
  name => name.length > 3,
  name => name.toUpperCase()
)
console.log(processed);