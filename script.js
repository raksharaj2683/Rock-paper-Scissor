// let userScore = 0;
// let compScore = 0;

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");

// const userScorePara = document.querySelector("#user-score");
// const compScorePara = document.querySelector("#comp-score");

// const genCompChoice = () => {
//   const options = ["rock", "paper", "scissors"];
//   const randIdx = Math.floor(Math.random() * 3);
//   return options[randIdx];
// };

// const drawGame = () => {
//   msg.innerText = "Game was Draw. Play again.";
//   msg.style.backgroundColor = "#081b31";
// };

// const showWinner = (userWin, userChoice, compChoice) => {
//   if (userWin) {
//     userScore++;
//     userScorePara.innerText = userScore;
//     msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
//     msg.style.backgroundColor = "green";
//   } else {
//     compScore++;
//     compScorePara.innerText = compScore;
//     msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
//     msg.style.backgroundColor = "red";
//   }
// };

// const playGame = (userChoice) => {
//   //Generate computer choice
//   const compChoice = genCompChoice();

//   if (userChoice === compChoice) {
//     //Draw Game
//     drawGame();
//   } else {
//     let userWin = true;
//     if (userChoice === "rock") {
//       //scissors, paper
//       userWin = compChoice === "paper" ? false : true;
//     } else if (userChoice === "paper") {
//       //rock, scissors
//       userWin = compChoice === "scissors" ? false : true;
//     } else {
//       //rock, paper
//       userWin = compChoice === "rock" ? false : true;
//     }
//     showWinner(userWin, userChoice, compChoice);
//   }
// };

// choices.forEach((choice) => {
//   choice.addEventListener("click", () => {
//     const userChoice = choice.getAttribute("id");
//     playGame(userChoice);
//   });
// });







// Declare variables for user and computer scores
let userScore = 0;
let compScore = 0;

// Select all choice buttons using querySelectorAll
const choices = document.querySelectorAll(".choice");

// Get the message element
const msg = document.querySelector("#msg");

// Get the score display paragraphs
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate a random computer choice ("rock", "paper", or "scissors")
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Function to update message for a draw and set background color
const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31"; // Adjust background color as needed
};

// Function to display the winner, update scores, and set message background color
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green"; // Adjust background color as needed
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red"; // Adjust background color as needed
  }
};

// Function to play a round of the game
const playGame = (userChoice) => {
  // Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // Scissors, Paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // Rock, Scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // Rock, Paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// Add event listener to each choice button
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
