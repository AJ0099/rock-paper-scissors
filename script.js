const buttons = document.querySelectorAll("button");
const opacity = document.querySelector(".opacity");
const playerPoint = document.querySelector(".playerPoint");
const computerPoint = document.querySelector(".computerPoint");
const result = document.querySelector(".result");
const whoWins = document.querySelector(".whoWins");
const computerCanChoose = ["rock", "paper", "scissors"];
const modal = document.querySelector(".modal");
const finalResults = document.querySelector(".finalResults");
const playAgain = document.querySelector(".playAgain");

opacity.classList.remove("opacity");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerChoice = e.target.textContent.toLowerCase();
    const computerChoice =
      computerCanChoose[Math.floor(Math.random() * computerCanChoose.length)];
    playRound(playerChoice, computerChoice);
  });
});

const playRound = (playerChoice, computerChoice) => {
  switch (playerChoice) {
    case "rock":
      if (computerChoice === "paper") {
        result.textContent = "You lost!";
        whoWins.textContent = `${computerChoice} beats ${playerChoice}`;
        computerPoint.textContent++;
      } else if (computerChoice === "scissors") {
        result.textContent = "You win!";
        whoWins.textContent = ` ${playerChoice} beats ${computerChoice}`;
        playerPoint.textContent++;
      } else {
        whoWins.textContent = `${playerChoice} ties with ${computerChoice}`;
        result.textContent = `It's a tie`;
      }
      break;
    case "paper":
      if (computerChoice === "scissors") {
        result.textContent = "You lost!";
        whoWins.textContent = `${computerChoice} beats ${playerChoice}`;
        computerPoint.textContent++;
      } else if (computerChoice === "rock") {
        result.textContent = "You win!";
        whoWins.textContent = ` ${playerChoice} beats ${computerChoice}`;
        playerPoint.textContent++;
      } else {
        whoWins.textContent = `${playerChoice} ties with ${computerChoice}`;
        result.textContent = `It's a tie`;
      }
      break;
    case "scissors":
      if (computerChoice === "rock") {
        result.textContent = "You lost!";
        whoWins.textContent = `${computerChoice} beats ${playerChoice}`;
        computerPoint.textContent++;
      } else if (computerChoice === "paper") {
        result.textContent = "You win!";
        whoWins.textContent = ` ${playerChoice} beats ${computerChoice}`;
        playerPoint.textContent++;
      } else {
        whoWins.textContent = `${playerChoice} ties with ${computerChoice}`;
        result.textContent = `It's a tie`;
      }
      break;

    default:
      whoWins.textContent = "Invalid";
      result.textContent = `Choice!`;
      break;
  }
  if (Number(playerPoint.textContent) === 5) {
    computerPoint.textContent = 0;
    return stopRound(playerPoint, computerPoint);
  } else if (Number(computerPoint.textContent) === 5) {
    playerPoint.textContent = 0;
    return stopRound(playerPoint, computerPoint);
  }
};

const stopRound = (playerPoint, computerPoint) => {
  if (playerPoint.textContent == 5) {
    finalResults.textContent = "You Win!";
    modal.style.display = "flex";
    opacity.classList.add("opacity");
  } else if (computerPoint.textContent == 5) {
    finalResults.textContent = "You Lost!";
    modal.style.display = "flex";
    opacity.classList.add("opacity");
  }
};

playAgain.addEventListener("click", () => {
  playerPoint.textContent = 0;
  computerPoint.textContent = 0;
  result.textContent = "Choose your weapon";
  whoWins.textContent = "First to score 5 points wins the game";
  modal.style.display = "none";
  opacity.classList.remove("opacity");
});
