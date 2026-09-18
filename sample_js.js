
function greet(name) {
  return `Hello, ${name}!`;
}

// console.log(greet("Michael"));
// console.log(greet("Tabor"));
// console.log(greet("Caleb"));
// console.log(greet("Danee"));

function toFahrenheit(celsiusTemp) {
  return (celsiusTemp * 9/5) + 32;
}

// console.log(`20 degrees Celsius is ${toFahrenheit(20)}F`);

// FizzBuzz Interview Question
// The FizzBuzz interview question tests basic logic and problem-solving. 
// You are asked to write a program that prints the numbers from \(1\) to \(N\). 
// However, for multiples of three, print "Fizz"; for multiples of five, print "Buzz"; and for multiples of both, print "FizzBuzz".
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(15);

// Larges Number in an array
// [1, 5, 8, 3, 2]
function largestNumber(numbers) {
  // First index of an array is 0
  let largest = numbers[0];
  for (let n of numbers) {
    if (n > largest) {
      largest = n;
      console.log(`New Largest number is ${largest} at index ${numbers.indexOf(n)}`);
    } else {
      console.log(`${n} is not larger than ${largest}`);
    }
  }
  return largest;
}
largestNumber([1, 5, 8, 3, 2]);
// console.log(largestNumber([1, 5, 8, 3,'20']));

// count how many times a word appears in a sentence
// { key: value }
function countWords(sentence) {
  const wordCounts = {};
  const wordsArray = sentence.toLowerCase().split(" "); // ["the", "cat", "sat", "on", "the", "mat", "the", "cat", "is", "happy"]
  for (let word of wordsArray) {

    wordCounts[word] = (wordCounts[word] || 0) + 1; // { "the": 2, "cat": 1, }
    // console.log(wordCounts);
  }
  return wordCounts;
}
// countWords("the cat sat on the mat the cat is happy");
// console.log(countWords("the cat sat on the mat the cat is happy"));
