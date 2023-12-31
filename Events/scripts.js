let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

//console.dir(productNameInputElement);
let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacters = enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;

    if (remainingCharacters === 60) {
        remainingCharsElement.classList.add("error");
        productNameInputElement.classList.add("error");
    } else if (remainingCharacters >= 50){
        remainingCharsElement.classList.add("warning");
        productNameInputElement.classList.add("warning");

        remainingCharsElement.classList.remove("error");
        productNameInputElement.classList.remove("error");
    } else {
        remainingCharsElement.classList.remove("warning");
        productNameInputElement.classList.remove("warning");
    }
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);