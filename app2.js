let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const userChoice_Rock = document.getElementById("rock");
const userChoice_Paper = document.getElementById("paper");
const userChoice_Scissors = document.getElementById("scissors");

const result = document.getElementById("result");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result.innerHTML = `You win! ${user} beats ${computer}`;
}

function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result.innerHTML = `You lose! ${computer} beats ${user}`;
}

function draw(user, computer) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result.innerHTML = `It's a draw!`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  userChoice_Rock.addEventListener("click", function() {
    game("rock");
  });

  userChoice_Paper.addEventListener("click", function() {
    game("paper");
  });

  userChoice_Scissors.addEventListener("click", function() {
    game("scissors");
  });
}

main();
