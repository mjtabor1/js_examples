

/* 
{
  question: "What is the capital of France?",
  options: ["Paris", "London", "Rome", "Berlin"],
  correctAnswer: "Paris"
}
*/
const questions = [
  {
    question: "Which film features a character who sees dead people?",
    options: ["The Others", "The Sixth Sense", "Poltergeist", "Insidious"],
    correctAnswer: "The Sixth Sense"
  },
  {
    question: "What is the name of the spaceship in Alien (1979)?",
    options: ["Nostromo", "Prometheus", "Discovery One", "Serenity"],
    correctAnswer: "Nostromo"
  },
  {
    question: "Which movie features a heist inside people's dreams?",
    options: ["Interstellar", "The Matrix", "Inception", "Shutter Island"],
    correctAnswer: "Inception"
  },
  {
    question: "In Jurassic Park, what type of dinosaur chases the kids in the kitchen?",
    options: ["T-Rex", "Dilophosaurus", "Velociraptor", "Brachiosaurus"],
    correctAnswer: "Velociraptor"
  },
  {
    question: "What color pill does Neo take in The Matrix?",
    options: ["Blue", "Green", "Red", "White"],
    correctAnswer: "Red"
  }
]

let currentIndex = 0;

const questionArea = document.getElementById("question-area");
const answerArea = document.getElementById("answer-area");
const startButton = document.getElementById("start-btn");

function displayQuestion(event) {
  console.log(event)
  const current = questions[currentIndex];
  questionArea.textContent = current.question;
  answerArea.innerHTML = "";

  current.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", function () {
      
      checkAnswer(option)
    })
    answerArea.appendChild(button);
  })
}

function checkAnswer(selectedOption) {
  const correct = questions[currentIndex].correctAnswer;
  const buttons = answerArea.querySelectorAll("button");
  buttons.forEach(button => {
    button.disabled = true;
  })

  if (selectedOption === correct) {
    alert("Correct!");
    currentIndex++;
  } else {
    alert(`Wrong! The correct answer is ${correct}`);
    buttons.forEach(button => {
      button.disabled = false;
    })
  }
}

// displayQuestion();

startButton.addEventListener("click", displayQuestion);