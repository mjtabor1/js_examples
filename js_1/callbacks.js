const greet = function () {
  console.log("Hello, World!");
}

// console.log(typeof greet); // "function"

const sayHi = greet; // Assigning the function to another variable
// sayHi(); // Calling the function using the new variable



// Simple callback example
function greetUser(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greetUser("Michael", sayGoodbye); // Passing the sayGoodbye function as a callback
// greetUser("Michael", function () {
//   console.log("Thanks for stopping by! - traditional function");
// });

// greetUser("Michaell", () => {
//   console.log("Thanks for stopping by! - arrow function");
// });

// Callback with arguments(passing data back to the callback function)
// function processOrder(item, price, callback) {
//   const total = price * 1.08;
//   callback(item, total);
// }

// processOrder("Laptop", 1000, function (item, total) {
//   console.log(`Your order for ${item} has been processed. Total: $${total.toFixed(2)}`);
// })


function readFileSimulated(filename, callback) {
  const fileExists = filename === "notes.txt";

  setTimeout(() => {
    if (!fileExists) {
      callback(new Error(`File ${filename} not found`), null);
    } else {
      callback(null, "This is the content of the file.");
    }
  }, 1000);
}

// readFileSimulated("notes.txt", (err, data) => {
//   if (err) {
//     console.error("Error: ", err.message);
//     return;
//   }
//   console.log("File content: ", data);
// })

// readFileSimulated("missing.txt", (err, data) => {
//   if (err) {
//     console.error("Error: ", err.message);
//     return;
//   }
//   console.log("File content: ", data);
// }) 

// A HOF is a function that takes one or more functions as arguments or returns a function as its result.

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  }
}

function multiply(factor, number) {
  return factor * number;
}

// const multiplyExample = multiply(2, 5);
// console.log(multiplyExample); // Output: 10

// const double = multiplyBy(2);
// const triple = multiplyBy(3);

// console.log(double(5)); // Output: 10
// console.log(triple(5)); // Output: 15

const fruits = ["apple", "banana", "cherry", "date"];

fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index} is ${fruit}`);
})

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

const ages = [12, 17, 20, 25, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // Output: [20, 25, 30]


const prices = [10, 20, 30, 40];
const totalPrices = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(totalPrices); // Output: 100