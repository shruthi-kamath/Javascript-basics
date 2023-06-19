function openPlayerConfig(event) {
  //to check which edit button is clicked
  editedPlayer = +event.target.dataset.playerid; //+ will change string to number
  //Showing overlay when edit is clicked
  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
}

function closePlayerConfig() {
  //Closing & clearning overlay when cancel is clicked
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutPut.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim(); //trim removes white spaces
  //Validating the input
  if (!enteredPlayerName) {
    //same as enteredPlayerName === ""
    event.target.firstElementChild.classList.add("error");
    errorOutPut.textContent = "Please enter a valid name!";
    return;
  }

  //storing & Managing submitted data
  const updatedPlayerData = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerData.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
