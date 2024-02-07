function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `You Win! Player: ${capitalizeFirstLetter(
      playerSelection
    )} beats Computer : ${capitalizeFirstLetter(computerSelection)}`;
  } else {
    return `You Lose! Computer :  ${capitalizeFirstLetter(
      computerSelection
    )} beats Player: ${capitalizeFirstLetter(playerSelection)}`;
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt(
      "Enter your choice (Rock, Paper, or Scissors):"
    );
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    console.log(`Round ${round}: ${result}`);

    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie game!");
  }
}

playGame();