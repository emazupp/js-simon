const simonContainerNumbers = document.querySelectorAll(".simon-numbers");
const secondsRemainingCounter = document.getElementById("seconds-remaining");
const numbersForm = document.getElementById("numbers-form");
const result = document.getElementById("result");
const resetButton = document.getElementById("reset-button");
const secondsToDisappear = 5;
let countdownInterval;
let resetInputValueInverval;
let simonNumbers = [];
let secondsRemaining = secondsToDisappear;
secondsRemainingCounter.innerHTML = secondsRemaining;

const generateNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const resetInputValue = () => {
  if (secondsRemaining <= 1) {
    clearInterval(resetInputValueInverval);
  }
  for (let i = 0; i < 5; i++) {
    simonContainerNumbers[i].value = "";
  }
};

const countdown = () => {
  if (secondsRemaining <= 1) {
    clearInterval(countdownInterval);
  }
  secondsRemaining--;
  secondsRemainingCounter.innerHTML = secondsRemaining;
};

/* const showNumberGuessed = () => {
    for(let i = 0; i< simonNumbers.length; i++) {
        
    }
} */
const startInterval = () => {
  countdownInterval = setInterval(countdown, 1000);
  resetInputValueInverval = setInterval(
    resetInputValue,
    secondsToDisappear * 1000
  );
};

numbersForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userNumbers = [];
  const numberGuessed = [];
  for (let i = 0; i < 5; i++) {
    userNumbers[i] = parseInt(simonContainerNumbers[i].value);
    if (simonNumbers.includes(userNumbers[i]))
      numberGuessed.push(userNumbers[i]);
  }
  resetInputValue();
  result.innerHTML = `Hai indovinato i numeri: ${numberGuessed}`;
  /* showNumberGuessed(); */
});

resetButton.addEventListener("click", () => {
  secondsRemaining = secondsToDisappear;
  for (let i = 0; i < 5; i++) {
    simonNumbers[i] = generateNumber(0, 20);
    simonContainerNumbers[i].value = simonNumbers[i];
  }
  startInterval();
});

/* popolo l'array di valori casuali */
for (let i = 0; i < 5; i++) {
  simonNumbers[i] = generateNumber(0, 20);
  simonContainerNumbers[i].value = simonNumbers[i];
}

startInterval();
