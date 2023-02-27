// Quiz Questions
const questions = [
  {
    prompt: "Q1. Commonly used data types DO Not Include",
    options: {
      optionOne: "strings",
      optionTwo: "booleans",
      optionThree: "alerts",
      optionFour: "numbers",
    },
    correctAnswer: "alerts",
  },
  {
    prompt:
      "Q2. The condition in an if/else statment is enclosed with _______.",
    options: {
      optionOne: "quotes",
      optionTwo: "curly brackets",
      optionThree: "parenthesis",
      optionFour: "square brackets",
    },
    correctAnswer: "parenthesis",
  },
  {
    prompt: "Q3. Arrays in JavaScript can be used to store _______.",
    options: {
      optionOne: "numbers and strings",
      optionTwo: "other arrays",
      optionThree: "booleans",
      optionFour: "all of the above",
    },
    correctAnswer: "all of the above",
  },
  {
    prompt:
      "Q4. A very useful tool used during development and debugging for printing content to the debugger is:",
    options: {
      optionOne: "JavaScript",
      optionTwo: "terminal/bash",
      optionThree: "for loops",
      optionFour: "console.log",
    },
    correctAnswer: "console.log",
  },
];

let questionIndex = 0;

// Displaying Questions
function showQuestions() {
  const currentQuestion = questions[questionIndex];

  const questionHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${currentQuestion.prompt}</h5>
        <ul>
          <ol><button class = "question-btn">${currentQuestion.options.optionOne}</button></ol>
          <ol><button class = "question-btn">${currentQuestion.options.optionTwo}</button></ol>
          <ol><button class = "question-btn">${currentQuestion.options.optionThree}</button></ol>
          <ol><button class = "question-btn">${currentQuestion.options.optionFour}</button></ol>
        </ul>
        <a href="#" class="btn btn-primary" onclick="nextQuestion()">
          Next
        </a>
      </div>
    </div>
  `;
  $("#question-container").html(questionHTML);
}

// Function Call for Answer Selection (Correct/Incorrect)
var questionBtn= $(".question-btn");

function answerSelection() {
  questionBtn.on("click", function () {
    (if )


})
};

// Looping through each question
function nextQuestion() {
  questionIndex++;

  if (questionIndex < questions.length) {
    showQuestions();
  } else {
    $("#question-container").html(`<h1>No More Questions</h1>`);
  }
}

// Timer Function
var timeEl = document.querySelector(".timer");
var secondsLeft = 60;

function Timer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Timer: " + secondsLeft;

    if (secondsLeft == 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// Set Up to Start Game (Initializing Game [Button] & On Click to Start)
var StartButton = $(".start-btn");
StartButton.on("click", function () {
  showQuestions();
  Timer();
});
