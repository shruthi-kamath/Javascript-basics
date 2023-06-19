//Resetting the game board
function resetGameBoard() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOver.firstElementChild.innerHTML =
    "You Won, <span id='winner-name'>PLAYER NAME</span>!";
  gameOver.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameboardItemElement = gameboardElement.children[gameBoardIndex];
      gameboardItemElement.textContent = "";
      gameboardItemElement.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

//display the game page
function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player name for both players!");
    return;
  }

  resetGameBoard();

  activePlayerName.textContent = players[activePlayer].name;
  gameArea.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

//game login - make game feild clickable
function selectGameField(event) {
  if (gameIsOver === true) {
    return;
  }

  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  //checking if the field is already clicked
  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Please select an empty field");
    return;
  }

  selectedField.textContent = players[activePlayer].Symbol; //player[0] for first turn
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  const winnerID = checkForGameOver();
  if (winnerID !== 0) {
    endGame(winnerID);
  }
  //console.log(winnerID);

  currentRound++;
  switchPlayer();
}

//Checking for winner
function checkForGameOver() {
  //checking for the row for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  //checking for the columns for equality
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function endGame(winnerID) {
  gameIsOver = true;
  gameOver.style.display = "block";
  if (winnerID > 0) {
    const winnerName = players[winnerID - 1].name;
    gameOver.firstElementChild.firstElementChild.textContent = winnerName;
  } else {
    gameOver.firstElementChild.textContent = "It's a Draw!";
  }
}
