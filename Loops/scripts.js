//First Example: Sum numbers
const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum(){
    const userNumberInputElement = document.getElementById("user-number");
    const eneteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for (let i = 0; i<=eneteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResultElement = document.getElementById("calculated-sum");
    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);


//Second Example : Highlight links
const HighlightLinksButtonElement = document.querySelector("#highlight-links button");

function HighlightLinks () {
    const anchorElements = document.querySelectorAll("#highlight-links a");

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add("highlight");
    }
}

HighlightLinksButtonElement.addEventListener("click", HighlightLinks);


//Third Example : Display Information
const dummyUserData = {
    firstName: "Shruthi",
    lastName: "Kamath",
    Age: 26
};

const displayUserDataButtonElement = document.querySelector("#user-data button");



function displayUserData () {
    const outputDataElement = document.getElementById("output-user-data");
    outputDataElement.innerHTML ="";
    
    for(const key in dummyUserData) {
        const newUserDataListItemElement = document.createElement("li");

        const outPutText = key.toUpperCase() + ':' + dummyUserData[key];
        newUserDataListItemElement.textContent = outPutText;
        outputDataElement.append(newUserDataListItemElement);
    }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);


//Fourth Example : Statistics
const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice () {
    return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
    const tragetNumberInputElement = document.getElementById("user-target-number");
    const diceRollsListElemet = document.getElementById("dice-rolls")

    const eneteredNumber = tragetNumberInputElement.value;
    diceRollsListElemet.innerHTML ="";

    let hasRolledTargetnumber = false;
    let numberOfRolles = 0;

    while (!hasRolledTargetnumber){
        const rolledNumber = rollDice();
        // if (rolledNumber == eneteredNumber) {
        //     hasRolledTargetnumber = true;
        // }
        numberOfRolles++;
        const newRollListItemElement = document.createElement("li");
        const outputText = "Roll" + numberOfRolles + ":" + rolledNumber;
        newRollListItemElement.textContent = outputText;
        diceRollsListElemet.append(newRollListItemElement);
        hasRolledTargetnumber = rolledNumber == eneteredNumber;
    }
    const outputTotalRollsElement = document.getElementById("output-total-rolls");
    const outputTargetNumberElement = document.getElementById("output-target-number");

    outputTargetNumberElement.textContent = eneteredNumber;
    outputTargetNumberElement.textContent = numberOfRolles;
}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);