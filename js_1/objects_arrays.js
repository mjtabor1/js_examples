const questions = [
  "What year did JS launch?",
  "What does DOM stand for?",
  "What company created Git?",
  "What does API stand for?",
];

// console.log(questions[0]);
// console.log(questions.length);

questions.push("What is Big O notation?");
// console.log(questions);
questions.pop();
// console.log(questions);

//Section 2: Looping & Iteration With Arrays

// Class for loop
for (let i = 0; i < questions.length; i++) {
  console.log(`Question ${i + 1}: ${questions[i]}`);
}

for (const question of questions) {
  console.log(`Question: ${question}`);
}

for (const [index, element] of questions.entries()) {
  console.log(index, element);
}

questions.forEach((question, index) => {
  console.log(`Question ${index + 1}: ${question}`);
});

const shortQuestions = questions.filter(q => q.length < 25);
// console.log(shortQuestions); // Output: ["What year did JS launch?", "What does DOM stand for?", "What company created Git?", "What does API stand for?"]

const questionLengths = questions.map(q => q.length);
// console.log(questionLengths); // Output: [23, 22, 24, 22]

const totalCharacters = questions.reduce((accumulator, currentQuestion) => accumulator + currentQuestion.length, 0);
// console.log(totalCharacters); // Output: 91

// OBJECTS 

const triviaQuestion = {
  question: "What year did JS launch?",
  answer: "1995",
  category: "History",
  points: 10,
  isAnswered: false,
  reveal() {
    return this.isAnswered ? `The answer is ${this.answer}.` : "Not yet answered.";
  }
}

// console.log(triviaQuestion.prompt);
// console.log(triviaQuestion["category"])
// console.log(triviaQuestion.reveal());

triviaQuestion.isAnswered = true;
// console.log(triviaQuestion.reveal());

// for...in : iterates over the keys of an object
for (const key in triviaQuestion) {
  if (typeof triviaQuestion[key] !== "function") {
    console.log(`${key}: ${triviaQuestion[key]}`)
  }
}

console.log(Object.keys(triviaQuestion));
console.log(Object.values(triviaQuestion));
console.log(Object.entries(triviaQuestion)); // Output: [["prompt", "What year did JS launch?"], ["answer", "1995"], ["category", "History"], ["points", 10], ["isAnswered", true], ["reveal", [Function: reveal]]]

for (const [key, value] of Object.entries(triviaQuestion)) {
  console.log(`${key}: ${value}`);
}

// Rest Syntax
// Rest in function parameters allows us to represent an indefinite number of arguments as an array.
function tallyScore(playerName, ...pointsPerRound) {
  const total = pointsPerRound.reduce((sum, point) => sum + point, 0);
  return `${playerName} scored a total of ${total} points.`;
}

// console.log(tallyScore("Michael", 10, 20, 15, 20))

const leaderboard = [95, 80, 72, 60, 45];
// leaderboard.sort((a, b) => b - a); // Sort the leaderboard in descending order
const [firstPlace, secondPlace, ...restOfScores] = leaderboard; // Destructuring assignment to extract the first two scores
// console.log(firstPlace, secondPlace);
// console.log(restOfScores);

const { question, ...questionMetadata } = triviaQuestion;
console.log(question);
console.log(questionMetadata);