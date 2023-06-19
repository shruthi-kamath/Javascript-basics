const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
//to save the playername
const players = [
  {
    name: "",
    Symbol: "X",
  },
  {
    name: "",
    Symbol: "O",
  },
];

//Savning non-button element
const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorOutPut = document.getElementById("config-error");
const gameArea = document.getElementById("active-game");
const activePlayerName = document.getElementById("active-player-name");
const gameOver = document.getElementById("game-over");

//Savning button element
const editPlayer1Btn = document.getElementById("edit-player-1");
const editPlayer2Btn = document.getElementById("edit-player-2");
const cancelConfigBtn = document.getElementById("cancel-config");
const startNewGameBtn = document.getElementById("start-btn");

const gameboardElement = document.getElementById("game-board");
const gameField = document.querySelectorAll("#game-board li");

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

cancelConfigBtn.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtn.addEventListener("click", startNewGame);

for (const gameFieldElement of gameField) {
  gameFieldElement.addEventListener("click", selectGameField);
}
