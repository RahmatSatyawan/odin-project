let userScore = 0;
let computerScore = 0;
let round = 1;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const userChoice_show = document.getElementById("user-choice");
const computerChoice_show = document.getElementById("computer-choice");

const userChoice_Rock = document.getElementById("rock");
const userChoice_Paper = document.getElementById("paper");
const userChoice_Scissors = document.getElementById("scissors");

const result = document.getElementById("result");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(userChoice, computerChoice) {
  if (round >= 5) {
    userChoice_Rock.disabled = true;
    userChoice_Paper.disabled = true;
    userChoice_Scissors.disabled = true;
    result.innerHTML += "<br>Game Over!";
    return;
  }

  userChoice = userChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  userChoice_show.innerHTML = "User Choice : " + userChoice;
  computerChoice_show.innerHTML = "Computer Choice : " + computerChoice;

  console.log(`Player: ${userChoice} vs Computer: ${computerChoice}`);

  if (userChoice === computerChoice) {
    console.log("It's a tie!");
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `It's a draw!`;
  }

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(
      `You Win! Player: ${userChoice} beats Computer : ${computerChoice}`
    );
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `You win! ${userChoice} beats ${computerChoice}`;
  } else {
    console.log(
      `You Lose! Computer :  ${computerChoice} beats Player: ${userChoice}`
    );
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = `You lose! ${computerChoice} beats ${userChoice}`;
  }

  round++;
}

function getUserChoice() {
  userChoice_Rock.addEventListener("click", function () {
    playRound("rock", getComputerChoice());
  });
  userChoice_Paper.addEventListener("click", function () {
    playRound("paper", getComputerChoice());
  });
  userChoice_Scissors.addEventListener("click", function () {
    playRound("scissors", getComputerChoice());
  });
}

function main() {
  getUserChoice();

  const resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", function () {
    userScore = 0;
    computerScore = 0;
    round = 1;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = "";
    userChoice_show.innerHTML = "";
    computerChoice_show.innerHTML = "";
    userChoice_Rock.disabled = false;
    userChoice_Paper.disabled = false;
    userChoice_Scissors.disabled = false;
  });
}

main();
