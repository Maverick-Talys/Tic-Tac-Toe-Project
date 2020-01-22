let cases = [
  Array.from(document.getElementsByClassName("row-1")),
  Array.from(document.getElementsByClassName("row-2")),
  Array.from(document.getElementsByClassName("row-3"))
];

let p1Score = document.getElementById("p1-points");
let p2Score = document.getElementById("p2-points");
let displayTurnPlayerName = document.getElementById("turn-player-name");
const newGameButton = document.getElementById("new-game");
const resetButton = document.getElementById("reset");

let playerTurn = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
const playerOneId = "X";
const playerTwoId = "O";
let winner = false;

let gameState = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const ERows = (ECols = Object.freeze({
  FIRST: 0,
  SECOND: 1,
  THIRD: 2
}));

function checkingRows() {
  if (
    gameState[ERows.FIRST][ECols.FIRST] === gameState[ERows.FIRST][ECols.SECOND] &&
    gameState[ERows.FIRST][ECols.FIRST] === gameState[ERows.FIRST][ECols.THIRD] &&
    gameState[ERows.FIRST][ECols.FIRST] != null) {
    displayWinnerPlayer(playerTurn);
    colorWinningCases(cases[ERows.FIRST][ECols.FIRST], cases[ERows.FIRST][ECols.SECOND], cases[ERows.FIRST][ECols.THIRD]);
  } else if (
    gameState[ERows.SECOND][ECols.FIRST] === gameState[ERows.SECOND][ECols.SECOND] &&
    gameState[ERows.SECOND][ECols.FIRST] === gameState[ERows.SECOND][ECols.THIRD] &&
    gameState[ERows.SECOND][ECols.FIRST] != null) {
    displayWinnerPlayer(playerTurn);
    colorWinningCases(cases[ERows.SECOND][ECols.FIRST], cases[ERows.SECOND][ECols.SECOND], cases[ERows.SECOND][ECols.THIRD]);
  } else if (
    gameState[ERows.THIRD][ECols.FIRST] === gameState[ERows.THIRD][ECols.SECOND] &&
    gameState[ERows.THIRD][ECols.SECOND] === gameState[ERows.THIRD][ECols.THIRD] &&
    gameState[ERows.THIRD][ECols.FIRST] != null) {
    displayWinnerPlayer(playerTurn);
    colorWinningCases(cases[ERows.THIRD][ECols.FIRST], cases[ERows.THIRD][ECols.SECOND], cases[ERows.THIRD][ECols.THIRD]);
  }
}

function checkingColumn() {
  if (
    gameState[ERows.FIRST][ECols.FIRST] === gameState[ERows.SECOND][ECols.FIRST] &&
    gameState[ERows.FIRST][ECols.FIRST] === gameState[ERows.THIRD][ECols.FIRST] &&
    gameState[ERows.FIRST][ECols.FIRST] != null) {
    displayWinnerPlayer(playerTurn);
    colorWinningCases(cases[ERows.FIRST][ECols.FIRST], cases[ERows.SECOND][ECols.FIRST], cases[ERows.THIRD][ECols.FIRST]);
  } else if (
    gameState[ERows.FIRST][ECols.SECOND] === gameState[ERows.SECOND][ECols.SECOND] &&
    gameState[ERows.FIRST][ECols.SECOND] === gameState[ERows.THIRD][ECols.SECOND] &&
    gameState[ERows.FIRST][ECols.SECOND] != null) {
    displayWinnerPlayer(playerTurn);
    colorWinningCases(cases[ERows.FIRST][ECols.SECOND], cases[ERows.SECOND][ECols.SECOND], cases[ERows.THIRD][ECols.SECOND]);
  } else if (
    gameState[ERows.FIRST][ECols.THIRD] === gameState[ERows.SECOND][ECols.THIRD] &&
    gameState[ERows.FIRST][ECols.THIRD] === gameState[ERows.THIRD][ECols.THIRD] &&
    gameState[ERows.FIRST][ECols.THIRD] != null) {
    displayWinnerPlayer(playerTurn);
    colorWinningCases(cases[ERows.FIRST][ECols.THIRD], cases[ERows.SECOND][ECols.THIRD], cases[ERows.THIRD][ECols.THIRD]);
  }
}

function checkingDiagonal() {
  if (gameState[ERows.FIRST][ECols.FIRST] === gameState[ERows.SECOND][ECols.SECOND] &&
    gameState[ERows.FIRST][ECols.FIRST] === gameState[ERows.THIRD][ECols.THIRD] &&
    gameState[ERows.FIRST][ECols.FIRST] != null
  ) {
    displayWinnerPlayer(playerTurn);
    colorWinningCases(cases[ERows.FIRST][ECols.FIRST], cases[ERows.SECOND][ECols.SECOND], cases[ERows.THIRD][ECols.THIRD]);
  } else if (
    gameState[ERows.THIRD][ECols.FIRST] === gameState[ERows.SECOND][ECols.SECOND] &&
    gameState[ERows.THIRD][ECols.FIRST] === gameState[ERows.FIRST][ECols.THIRD] &&
    gameState[ERows.THIRD][ECols.FIRST] != null) {
    displayWinnerPlayer(playerTurn);
    colorWinningCases(cases[ERows.THIRD][ECols.FIRST], cases[ERows.SECOND][ECols.SECOND], cases[ERows.FIRST][ECols.THIRD]);
  }
}

function colorWinningCases(caseOne, caseTwo, caseThree) {
  caseOne.style.backgroundColor = "#26ff00";
  caseTwo.style.backgroundColor = "#26ff00";
  caseThree.style.backgroundColor = "#26ff00";
}

function checkingWinner() {
  checkingRows();
  checkingColumn();
  checkingDiagonal();
}

function randomPlayerMatchStart() {
  let number = Math.floor(Math.random() * 2) + 1;
  if (number === 1) {
    playerTurn = playerOneId;
  } else {
    playerTurn = playerTwoId;
  }
  displayPlayerturn(playerTurn);
}

function switchPlayerTurn() {
  if (playerTurn === playerOneId) {
    playerTurn = playerTwoId;
  } else {
    playerTurn = playerOneId;
  }
}

function displayPlayerturn(playerTurn) {
  if (playerTurn === playerOneId) {
    displayTurnPlayerName.textContent = "Player X";
    displayTurnPlayerName.style.color = "#005ff9"
  } else {
    displayTurnPlayerName.textContent = "Player O";
    displayTurnPlayerName.style.color = "#f90000"
  }
}

function displayWinnerPlayer(playerTurn) {
  if (playerTurn === playerOneId) {
    playerOneScore += 1;
    p1Score.textContent = playerOneScore;
  } else {
    playerTwoScore += 1;
    p2Score.textContent = playerTwoScore;
  }
  winner = true;
}

function displayPlayerColorChoice(playerTurn, casesFlag) {
  if (playerTurn === playerOneId) {
    casesFlag.style.color = "#005ff9"
  } else {
    casesFlag.style.color = "#f90000"
  }
}

function gameOne() {
  for (let i = 0; i < cases.length; i++) {
    for (let x = 0; x < cases[i].length; x++) {
      cases[i][x].addEventListener("click", function () {
        if (!winner && (gameState[i][x] !== "X" && gameState[i][x] !== "O")) {
          cases[i][x].textContent = playerTurn;
          gameState[i][x] = playerTurn;
          displayPlayerColorChoice(playerTurn, cases[i][x])
          checkingWinner();
          switchPlayerTurn();
          displayPlayerturn(playerTurn);
        }
      });
    }
  }
}

function newGame() {
  newGameButton.addEventListener("click", function () {
    for (let i = 0; i < cases.length; i++) {
      for (let x = 0; x < cases[i].length; x++) {
        cases[i][x].textContent = "";
        cases[i][x].style.backgroundColor = "";
      }
    }
    gameState = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    winner = false;
    playerTurn = 0;
    randomPlayerMatchStart();
    gameOne();
  });
}

function reset() {
  resetButton.addEventListener("click", function () {
    playerOneScore = 0;
    playerTwoScore = 0;
    p1Score.textContent = playerOneScore;
    p2Score.textContent = playerTwoScore;
    newGame();
  });
}

function initApp() {
  newGame();
  reset();
  randomPlayerMatchStart();
  gameOne();
}

initApp();