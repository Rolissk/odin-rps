let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

function getComputerChoice() { /*Assign a choice for computer*/
  let random = Math.floor(Math.random() * 3) + 1;
  if (random == 1) {
    computerChoice = "rock"
  } else if (random == 2) {
    computerChoice = "paper"
  } else {
    computerChoice = "scissors"
  }
  return computerChoice;
}

const btn = document.querySelector("#buttons");
buttons.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "rBtn":
      humanChoice = "rock";
      getComputerChoice();
      playRound(humanChoice, computerChoice);
      console.log(humanChoice, computerChoice);
      console.log(`Scores: You - ${humanScore}, Computer - ${computerScore}`)
      break;
    case "pBtn":
      humanChoice = "paper";
      getComputerChoice();
      playRound(humanChoice, computerChoice);
      console.log(humanChoice, computerChoice);
      console.log(`Scores: You - ${humanScore}, Computer - ${computerScore}`)
      break;
    case "sBtn":
      humanChoice = "scissors";
      getComputerChoice();
      playRound(humanChoice, computerChoice);
      console.log(humanChoice, computerChoice);
      console.log(`Scores: You - ${humanScore}, Computer - ${computerScore}`)
      break;
  }
})


function playRound(humanPick, computerPick) {
  if ((humanPick == "rock" && computerPick == "scissors") || (humanPick == "paper" && computerPick == "rock") ||
    (humanPick == "scissors" && computerPick == "paper")) { /*Checks for all win options*/
    const result = document.querySelector("#roundResult");
    result.textContent = `Your pick: ${humanChoice} VS computers pick: ${computerChoice}`;
    humanScore++;
    const playerScore = document.querySelector("#plScore");
    playerScore.textContent = `Your score is ${humanScore}`
    if (humanScore === 5) {
      alert(`You have won the game!`)
    }
    return humanScore;
  } else if (humanPick === computerPick) { /*checks if its a tie*/
    const result = document.querySelector("#roundResult");
    result.textContent = `Your pick: ${humanChoice} VS computers pick: ${computerChoice}`;
  } else { /*If not a win or tie, its a lose*/
    const result = document.querySelector("#roundResult");
    result.textContent = `Your pick: ${humanChoice} VS computers pick: ${computerChoice}`;
    computerScore++;
    const compScore = document.querySelector("#compScore");
    compScore.textContent = `Computers score is ${computerScore}`
    if (computerScore === 5) {
      alert(`Computer has won the game!`)
    }
    return computerScore;
  }
}
