let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let pickPl;
let pickPc;
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
      break;
    case "pBtn":
      humanChoice = "paper";
      getComputerChoice();
      document.getElementById('playerPic').src = `${humanChoice}.png`;
      playRound(humanChoice, computerChoice);
      break;
    case "sBtn":
      humanChoice = "scissors";
      getComputerChoice();
      document.getElementById('playerPic').src = `${humanChoice}.png`;
      playRound(humanChoice, computerChoice);
      break;
  }
})

function playRound(humanPick, computerPick) {
  if ((humanPick == "rock" && computerPick == "scissors") || (humanPick == "paper" && computerPick == "rock") ||
    (humanPick == "scissors" && computerPick == "paper")) {
    changeImage(playerPic, humanChoice);/*sitaa funkcija*/
    humanScore++;
    updateScore();
    /* pop up pazinojums par uzvaru - jauztaisa*/
    if (humanScore === 5) {
      alert(`You have won the game!`)
      humanScore = 0;
      computerScore = 0;
      updateScore();
    }
    return humanScore;
  } else if (humanPick === computerPick) {
    /* pop up pazinojums par neizskirtu - jauztaisa*/
  } else {
    computerScore++;
    updateScore();
    /* pop up pazinojums par zaudejumu - jauztaisa*/
    if (computerScore === 5) {
      alert(`Computer has won the game!`)
      humanScore = 0;
      computerScore = 0;
      updateScore();
    }
    return computerScore;
  }
}

function updateScore() {
  const playerScore = document.querySelector("#plScore");
  playerScore.textContent = `You: ${humanScore}`
  const compScore = document.querySelector("#compScore");
  compScore.textContent = `Computer: ${computerScore}`
}

function changeImage(target, image) { /* seit taa funckija */
  document.querySelector(`#${target}`).src = `./images/${image}.png`
}
function countDown() {
  /*When player picks his choice then fighting smoke effect covers the pick box and 
  numbers on top of that image count down from 3 and on 0 picks and winner is revealed */
}