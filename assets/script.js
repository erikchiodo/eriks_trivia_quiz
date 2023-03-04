// Intiatizing Variable to track amount of seconds left
var secondsLeft;
var timerInterval;

// Quiz Questions
const questions = [
  {
    ans: "Q1. Commonly used data types DO Not Include",
    options: {
      optionOne: "strings",
      optionTwo: "booleans",
      optionThree: "alerts",
      optionFour: "numbers",
    },
    correctAnswer: "alerts",
  },
  {
    ans: "Q2. The condition in an if/else statment is enclosed with _______.",
    options: {
      optionOne: "quotes",
      optionTwo: "curly brackets",
      optionThree: "parenthesis",
      optionFour: "square brackets",
    },
    correctAnswer: "parenthesis",
  },
  {
    ans: "Q3. Arrays in JavaScript can be used to store _______.",
    options: {
      optionOne: "numbers and strings",
      optionTwo: "other arrays",
      optionThree: "booleans",
      optionFour: "all of the above",
    },
    correctAnswer: "all of the above",
  },
  {
    ans: "Q4. A very useful tool used during development and debugging for printing content to the debugger is:",
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
        <h5 class="card-title">${currentQuestion.ans}</h5>
        <ul>
          <li><button class = "question-btn">${currentQuestion.options.optionOne}</button></li>
          <li><button class = "question-btn">${currentQuestion.options.optionTwo}</button></li>
          <li><button class = "question-btn">${currentQuestion.options.optionThree}</button></li>
          <li><button class = "question-btn">${currentQuestion.options.optionFour}</button></li>
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
      } else {
        cardClass.append(nextButtonHTML);
        cardClass.append(incorrectResponseHTML);
        secondsLeft -= 10;
      }
      questionBtn.off("click");
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
    questionIndex = 0;
    showResultPage();
  }
}
// Timer Function
var selectedQuestion = $(".question-btn");
var timeEl = document.querySelector(".timer");

function Timer() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    if (secondsLeft <= 0 || questionIndex == questions.length) {
      clearInterval(timerInterval);
      timeEl.textContent = "";
      showResultPage();
    }
    if (secondsLeft != -1) {
      timeEl.textContent = "Timer: " + secondsLeft;
    }
  }, 1000);
}

// Results Page (after completion of quiz)
var dynamicTimer = $("timer float-right");
// var initialInput = $("#initials");
var initialInput = document.getElementById("#initials");

function showResultPage() {
  // Submit Button Redirect To Leaderboard
  clearInterval(timerInterval);
  // if (secondsLeft > 0) secondsLeft = 0;
  let tempSecondsLeft = secondsLeft;

  const showPageHTML = `
  <div>
  <h1><strong>All Done!</strong></h1>
  <h2> Your final score is ${tempSecondsLeft}.
  <h2> Enter Initials: <input placeholder="Initials" id ="initials"/><button class = "start-btn" id="submit-btn">Submit</button>
  </div>
  `;

  $("#question-container").html(showPageHTML);

  // On Click Event that re-directs to Leaderboard Page (showLeaderBoard)
  var submitBtn = $("#submit-btn");
  submitBtn.on("click", function () {
    // take the content of initials and score, and add it to leaderboard
    // get the current value of the leaderboard
    let currentLeaderboard = JSON.parse(localStorage.getItem("leaderboard"));

    // console.log(`${tempSecondsLeft}` + "-" + `${initials.value}`);
    if (currentLeaderboard == null) {
      currentLeaderboard = [];
    }
    currentLeaderboard.push(`${tempSecondsLeft}` + "-" + `${initials.value}`);

    localStorage.setItem("leaderboard", JSON.stringify(currentLeaderboard));
    showLeaderBoard();
  });
}

// Method to Show Leaderboard after quiz completes
function showLeaderBoard() {
  const leaderBoardHTML = `
  <div>
  <h1 class = "high-score-header"> High Scores </h1>
  <button class = "start-btn" id = "go-back-btn"> Go back </button> <button class = "start-btn" id = "high-score-btn"> Clear high scores </button>
  </div>
  `;

  let currentLeaderboard = JSON.parse(localStorage.getItem("leaderboard"));
  const leaderboardWrapper = document.createElement("ul");
  currentLeaderboard.forEach((item, i) => {
    let scoreName = item.split("-");
    console.log(scoreName[0], scoreName[1]);
    const newScore = document.createElement("li");
    newScore.innerHTML = `${scoreName[0]} -  ${scoreName[1]}`;
    leaderboardWrapper.appendChild(newScore);
  });

  $("#question-container").html(leaderBoardHTML);

  $(".high-score-header").append(leaderboardWrapper);

  var highScoreBtn = $("#high-score-btn");

  // High score on click
  highScoreBtn.on("click", function () {
    localStorage.setItem("leaderboard", null);
    leaderboardWrapper.remove();
  });

  var goBackBtn = $("#go-back-btn");
  goBackBtn.on("click", function () {
    console.log("got here, go back button clicked");
    showStartPage();
  });
  // highScoreBtn.on("click", function () {

  // });
}
// Starting Page Creation Function
function showStartPage() {
  secondsLeft = 60;
  const startPageHTML = `
  <div class="card">
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
