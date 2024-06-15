var humanScore = 0;
var computerScore = 0;
var humanChoice;
var computerChoice;
var pickPl;
var pickPc;
var playerPic = "playerPic"
var compPic = "compPic"
const resetPic = "questionMark"

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
btn.addEventListener("click", (event) => {
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

const resetBtn = document.querySelector("#reset");
reset.addEventListener("click", () => {
  if (confirm("Are you sure you want to reset?") == true) {
    newGameStart();
  }
});
function playRound(humanPick, computerPick) {
  disableButtons()
  if ((humanPick == "rock" && computerPick == "scissors") || (humanPick == "paper" && computerPick == "rock") ||
    (humanPick == "scissors" && computerPick == "paper")) {
    changeImage(playerPic, humanChoice);
    countDown(3, `humanScore`);
  } else if (humanPick === computerPick) {
    changeImage(playerPic, humanChoice);
    countDown(3);
  } else {
    changeImage(playerPic, humanChoice);
    countDown(3, `computerScore`);
  }
}

function updateScore() {
  const playerScore = document.querySelector("#plScore");
  playerScore.textContent = `Player: ${humanScore}`
  const compScore = document.querySelector("#compScore");
  compScore.textContent = `Computer: ${computerScore}`
}

function changeImage(target, image) {
  const imgElement = document.getElementById(target);
  imgElement.setAttribute("src", `images/${image}.png`);
}
function countDown(seconds, whoScored) {
  let count = seconds
  const interval = setInterval(() => {
    const timer = document.querySelector("#countDown");
    timer.textContent = `${count}`
    count--;

    if (count < 0) {
      clearInterval(interval);
      timer.textContent = "Fight!";
      if (whoScored === `humanScore`) {
        humanScore++;
        updateScore();
      } else if (whoScored === `computerScore`) {
        computerScore++;
        updateScore();
      }
      changeImage(compPic, computerChoice);
      if (humanScore === 5) {
        const winner = `Player`
        winModal(winner)
        newGameStart();
      } else if (computerScore === 5) {
        const winner = `Computer`
        winModal(winner)
        newGameStart();
      }
      let afterCount = 1
      const interval2 = setInterval(() => {
        afterCount--;
        if (afterCount < 0) {
          clearInterval(interval2);
          newRound();
          enableButtons();
        }
      }, 600)
    }

  }, 500);
}
function disableButtons() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(function (button) {
    button.disabled = true;
  });
}
function enableButtons() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(function (button) {
    button.disabled = false;
  });
}
function newRound() {
  changeImage(playerPic, resetPic);
  changeImage(compPic, resetPic);
  const timer = document.querySelector("#countDown");
  timer.textContent = `VS`
}
function newGameStart() {
  humanScore = 0;
  computerScore = 0;
  updateScore();
  changeImage(playerPic, resetPic);
  changeImage(compPic, resetPic);
  const timer = document.querySelector("#countDown");
  timer.textContent = `VS`
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When function called, open the modal and names the winner
function winModal(winner) {
  modal.style.display = "block";
  const text = document.getElementById("winText")
  text.textContent = `${winner} has won the game!`
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}