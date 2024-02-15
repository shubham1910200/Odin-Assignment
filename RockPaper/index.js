function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return true; // Player wins
  } else {
    return false; // Player loses
  }
}
const result = document.getElementById("result");
function game() {
  let playerWins = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Enter your choice (rock, paper, or scissors):"
    );

    const computerSelection = computerPlay();

    const roundResult = playRound(playerSelection, computerSelection);

    if (roundResult === true) {
      playerWins++;
    }
   
  }

  if (playerWins > 0) {
    result.textContent += `You won ${playerWins} games out of ${5}`;
  } else {
    alert("You didn't win any round.");
  }
}

// Run the game
game();
