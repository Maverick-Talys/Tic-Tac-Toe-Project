let cases = Array.from(document.getElementsByClassName("case"));
let p1Score = document.getElementById("p1-points");
let p2Score = document.getElementById("p2-points");
let newGameButton = document.getElementById("new-game");
let resetButton = document.getElementById("reset");
let turnPlayer = document.getElementById("turn-player");
let turnDisplay = document.getElementById("turn-display")
let turnSentence = document.getElementById("turn-sentence-begin")
let turnSentenceEnd = document.getElementById("turn-sentence-end")


let playerOne = 1;
let playerTwo = 2;
let playerOneScore = 0;
let playerTwoScore = 0;
let turn = 0;
let winner = false;

function checkingWinner() {
  if
  //vérification Horizontale en partant de la première ligne
  (
    ((cases[0].textContent === cases[1].textContent) && (cases[0].textContent === cases[2].textContent)) &&
    ((cases[0].textContent == "X") || cases[0].textContent == "O")
  ) {
    cases[0].style.backgroundColor = "#26ff00"
    cases[1].style.backgroundColor = "#26ff00"
    cases[2].style.backgroundColor = "#26ff00"
    winner = true;
  } else if (
    ((cases[3].textContent === cases[4].textContent) && (cases[3].textContent === cases[5].textContent)) &&
    ((cases[3].textContent == "X") || cases[3].textContent == "O")
  ) {
    cases[3].style.backgroundColor = "#26ff00"
    cases[4].style.backgroundColor = "#26ff00"
    cases[5].style.backgroundColor = "#26ff00"
    winner = true;
  } else if (
    ((cases[6].textContent === cases[7].textContent) && (cases[6].textContent === cases[8].textContent)) &&
    ((cases[6].textContent == "X") || cases[6].textContent == "O")
  ) {
    cases[6].style.backgroundColor = "#26ff00"
    cases[7].style.backgroundColor = "#26ff00"
    cases[8].style.backgroundColor = "#26ff00"
    winner = true;
  }
  // Vérification Verticale en partant de la première colonne
  else if (
    ((cases[0].textContent === cases[3].textContent) && (cases[0].textContent === cases[6].textContent)) &&
    ((cases[0].textContent == "X") || cases[0].textContent == "O")
  ) {
    cases[0].style.backgroundColor = "#26ff00"
    cases[3].style.backgroundColor = "#26ff00"
    cases[6].style.backgroundColor = "#26ff00"
    winner = true;
  } else if (
    ((cases[1].textContent === cases[4].textContent) && (cases[1].textContent === cases[7].textContent)) &&
    ((cases[1].textContent == "X") || cases[1].textContent == "O")
  ) {
    cases[1].style.backgroundColor = "#26ff00"
    cases[4].style.backgroundColor = "#26ff00"
    cases[7].style.backgroundColor = "#26ff00"
    winner = true;
  } else if (
    ((cases[2].textContent === cases[5].textContent) && (cases[2].textContent === cases[8].textContent)) &&
    ((cases[2].textContent == "X") || cases[2].textContent == "O")
  ) {
    cases[2].style.backgroundColor = "#26ff00"
    cases[5].style.backgroundColor = "#26ff00"
    cases[8].style.backgroundColor = "#26ff00"
    winner = true;
  }
  // Vérification des Diagonales en partant du haut par la gauche 
  else if (
    ((cases[0].textContent === cases[4].textContent) && (cases[0].textContent === cases[8].textContent)) &&
    ((cases[0].textContent == "X") || cases[0].textContent == "O")
  ) {
    cases[0].style.backgroundColor = "#26ff00"
    cases[4].style.backgroundColor = "#26ff00"
    cases[8].style.backgroundColor = "#26ff00"
    winner = true;
  } else if (
    ((cases[2].textContent === cases[4].textContent) && (cases[2].textContent === cases[6].textContent)) &&
    ((cases[2].textContent == "X") || cases[2].textContent == "O")
  ) {
    cases[2].style.backgroundColor = "#26ff00"
    cases[4].style.backgroundColor = "#26ff00"
    cases[6].style.backgroundColor = "#26ff00"
    winner = true;
  } else {}
}

function randomStart() {
  let number = Math.floor(Math.random() * 2) + 1
  if (number === playerOne) {
    turn = playerOne
    turnSentence.textContent = "It's up to Player X to play"
  } else {
    turn = playerTwo
    turnSentence.textContent = "It's up to Player O to play"
  }

}

function togglePlayer() {
  if (turn === 2) {
    turnSentence.textContent = "It's up to Player X to play"
  } else {
    turnSentence.textContent = "It's up to Player O to play"
  }
}

function aiChoice() {
  let x = Math.floor(Math.random() * 9)
  if (cases[x].textContent === "") {
    cases[x].textContent = "O"
  } else {
    aiChoice()
    checkingWinner()
  }
}

function gameOne() {
  for (let i = 0; i < cases.length; i++) {
    cases[i].addEventListener("click", function () {
      togglePlayer()
      if ((turn === 1) && (cases[i].textContent === "") && (!winner)) {
        cases[i].textContent = "X"
        checkingWinner()
        if (winner) {
          playerOneScore++
          p1Score.textContent = playerOneScore
          turnSentence.textContent = "Player X win this match !"
        } else {
          turn++
        }
      } else if ((turn === 2) && (cases[i].textContent === "") && (!winner)) {
        cases[i].textContent = "O"
        checkingWinner()
        if (winner) {
          playerTwoScore++
          p2Score.textContent = playerTwoScore
          turnSentence.textContent = "Player O win this match !"
        } else {
          turn--
        }
      }
    })
  }
}

function gameTwo() {
  for (let i = 0; i < cases.length; i++) {
    cases[i].addEventListener("click", function () {
      if ((cases[i].textContent === "") && (!winner)) {
        cases[i].textContent = "X"
        checkingWinner()
        if (winner) {
          playerOneScore++
          p1Score.textContent = playerOneScore
        } else {
          aiChoice()
        }
      }
    })
  }
}

newGameButton.addEventListener("click", function () {
  for (let i = 0; i < cases.length; i++) {
    cases[i].textContent = ""
    cases[i].style.backgroundColor = ""
  }
  winner = false;
  randomStart();
})

resetButton.addEventListener("click", function () {
  for (let i = 0; i < cases.length; i++) {
    cases[i].textContent = ""
    cases[i].style.backgroundColor = ""
  }
  winner = false;
  playerOneScore = 0;
  playerTwoScore = 0;
  p1Score.textContent = playerOneScore
  p2Score.textContent = playerTwoScore
  randomStart();
})



gameOne()
randomStart()