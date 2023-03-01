// Intiatizing Variable to track amount of seconds left
var secondsLeft = -1;
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
      </div>
    </div>
  `;
  $("#question-container").html(questionHTML);

  const cardClass = $(".card");
  const nextButtonHTML = `<a href="#" class="btn btn-primary" onclick="nextQuestion()">Next</a>`;
  const correctResponseHTML = `<hr> <p>Correct!</p>`;
  const incorrectResponseHTML = `<hr> <p>Incorrect!</p>`;

  // Function Call for Answer Selection (Correct/Incorrect)
  var questionBtn = $(".question-btn");

  function answerSelection() {
    questionBtn.on("click", function (e) {
      e.preventDefault();
      let answer = e.target.innerHTML;
      if (answer === currentQuestion.correctAnswer) {
        cardClass.append(nextButtonHTML);
        cardClass.append(correctResponseHTML);
        console.log("Correct");
      } else {
        cardClass.append(nextButtonHTML);
        cardClass.append(incorrectResponseHTML);
        secondsLeft -= 10;

        console.log("Try Again!");
      }
    });
  }
  answerSelection();
}

// Looping through each question
function nextQuestion() {
  questionIndex++;

  if (questionIndex < questions.length) {
    showQuestions();
  } else {
    showResultPage();
  }
}
// Timer Function
var selectedQuestion = $(".question-btn");
var timeEl = document.querySelector(".timer");
function Timer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    if (secondsLeft <= 0 || questionIndex == questions.length) {
      clearInterval(timerInterval);
      timeEl.textContent = "";
      secondsLeft = -1;
    }
    if (secondsLeft != -1) {
      timeEl.textContent = "Timer: " + secondsLeft;
    }
  }, 1000);
}

// Results Page (after completion of quiz)
var dynamicTimer = $("timer float-right");
function showResultPage() {
  // Submit Button Redirect To Leaderboard

  const showPageHTML = `
  <div>
  <h1><strong>All Done!</strong></h1>
  <h2> Your final score is ${secondsLeft}.
  <h2> Enter Initials: <input placeholder="Initials" id ="initials"/><button id="submit-btn">Submit</button>
  </div>
  `;
  secondsLeft = -1;
  $("#question-container").html(showPageHTML);

  // On Click Event that re-directs to Leaderboard Page (showLeaderBoard)
  var submitBtn = $("#submit-btn");
  submitBtn.on("click", function () {
    showLeaderBoard();
    console.log("Clicked");
  });
}

// Method to Show Leaderboard after quiz completes
var initialInput = $("#initials");
function showLeaderBoard() {
  const leaderBoardHTML = `
  <div>
  <h1> High Scores </h1>

  <button id = "go-back-btn"> Go back </button> <button id = "high-score-bth"> Clear high scores </button>
  </div>
  `;

  $("#question-container").html(leaderBoardHTML);

  var goBackBtn = $("#go-back-btn");
  var highScoreBtn = $("#high-score-btn");

  goBackBtn.on("click", function () {
    showStartPage(); //How do you reset page? (reset timer?)
  });
  // highScoreBtn.on("click", function () {

  // });
}

// Starting Page Creation Function
function showStartPage() {
  secondsLeft = 60;
  const startPageHTML = `
  <div class="card" style="width: 18rem">
        <div class="card-body text-center">
          <h1 class="card-title">Coding Quiz Challenge</h1>
          <p class="card-text">
            Try to answer the following code-related questions within the time
            limit. Keep in mind that incorrect answers will penalize your
            score/time by ten seconds.
          </p>
          <button class="start-btn">Start!</button>
        </div>`;

  $("#question-container").html(startPageHTML);

  $(".start-btn").on("click", function () {
    Timer();
    showQuestions();
  });
}

// Displaying StartPage
showStartPage();

// Set Up to Start Game (Initializing Game [Button] & On Click to Start)
// var StartButton = $(".start-btn");
