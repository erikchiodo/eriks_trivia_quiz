const question = [
  {
    prompt: "Commonly used data types DO Not Include",
    options: {
      optionOne: "strings",
      optionTwo: "booleans",
      optionThree: "alerts",
      optionFour: "numbers",
    },
    correctAnswer: "alerts",
  },
  {
    prompt: "The condition in an if/else statment is enclosed with _______.",
    options: {
      optionOne: "quotes",
      optionTwo: "curly brackets",
      optionThree: "parenthesis",
      optionFour: "square brackets",
    },
    correctAnswer: "parenthesis",
  },
  {
    prompt: "Arrays in JavaScript can be used to store _______.",
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
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: {
      optionOne: "JavaScript",
      optionTwo: "terminal/bash",
      optionThree: "for loops",
      optionFour: "console.log",
    },
    correctAnswer: "console.log",
  },
];

// let friendIndex = 0;

// function showFriend() {
//   const currentFriend = myFriends[friendIndex];

//   const friendHTML = `
//     <div class="card" style="width: 18rem">
//         <div class="card-body">
//           <h5 class="card-title">${currentFriend.name}</h5>
//           <ul>
//             <li>${currentFriend.favorites.color}</li>
//             <li>${currentFriend.favorites.number}</li>
//             <li>${currentFriend.favorites.food}</li>
//             </ul>
//           <a href="#" class="btn btn-primary" onclick="nextFriend()">Next</a>
//         </div>
//       </div>
//     `;

//   $("#friend-container").html(friendHTML);
// }

// function nextFriend() {
//   friendIndex++;

//   if (friendIndex < myFriends.length) {
//     showFriend();
//   } else {
//     $("#friend-container").html(`<h1>no MORE FRIENDS TO SHOW</h1>`);
//   }
// }
