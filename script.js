const inputEl = document.querySelector("input");
const guessEl = document.querySelector(".guess");
const checkBtnEl = document.querySelector("button");
const remainingChancesTextEl = document.querySelector(".chances");
const remainingChancesEl = document.querySelector(".chance");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let totalChances = 10;

checkBtnEl.addEventListener("click", () => {
    if (checkBtnEl.textContent === "Play Again...😉") {
        // Reset the game
        totalChances = 10;
        randomNumber = Math.floor(Math.random() * 100) + 1;
        inputEl.disabled = false;
        inputEl.value = "";
        guessEl.textContent = "";
        checkBtnEl.textContent = "Check";
        remainingChancesTextEl.innerHTML = 'You have only <span class="chance">10</span> chances';
        remainingChancesEl.textContent = totalChances;
        return;
    }

    totalChances--;
    const inputValue = parseInt(inputEl.value);

    if (isNaN(inputValue) || inputValue < 1 || inputValue > 100) {
        guessEl.textContent = "Please enter a valid number between 1 and 100.";
        guessEl.style.color = "red";
        totalChances++;
    } else if (inputValue === randomNumber) {
        guessEl.textContent = `Congratulations! 🎉 You guessed it right. The number was ${randomNumber}.`;
        guessEl.style.color = "green";
        inputEl.disabled = true;
        checkBtnEl.textContent = "Play Again...😉";
    } else if (totalChances === 0) {
        guessEl.textContent = `Oops...! Bad luck 😥, You lost the game. The number was ${randomNumber}.`;
        guessEl.style.color = "red";
        inputEl.disabled = true;
        checkBtnEl.textContent = "Play Again...😉";
        remainingChancesTextEl.textContent = "No chances left";
    } else if (inputValue > randomNumber) {
        guessEl.textContent = "Your guess is high 👍.";
        guessEl.style.color = "#1446a0";
        remainingChancesEl.textContent = totalChances;
    } else {
        guessEl.textContent = "Your guess is low 👎.";
        guessEl.style.color = "#1446a0";
        remainingChancesEl.textContent = totalChances;
    }
});
