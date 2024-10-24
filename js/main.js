const simonContainerNumbers = document.querySelectorAll(".simon-numbers");
const secondsRemainingCounter = document.getElementById("seconds-remaining");
const numbersForm = document.getElementById("numbers-form");
const result = document.getElementById("result");
const resetButton = document.getElementById("reset-button");
const secondsToDisappear = 5;
let countdownInterval;
let resetInputValueInverval;
let simonNumbers = [];
let numberGuessed = [];
let secondsRemaining = secondsToDisappear;
secondsRemainingCounter.innerHTML = secondsRemaining;

const generateNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const populateArray = () => {
  for (let i = 0; i < 5; i++) {
    simonNumbers[i] = generateNumber(0, 20);
    simonContainerNumbers[i].value = simonNumbers[i];
    resetColor(i);
  }
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

const startInterval = () => {
  countdownInterval = setInterval(countdown, 1000);
  resetInputValueInverval = setInterval(
    resetInputValue,
    secondsToDisappear * 1000
  );
};

const showGreenGuessedNumbers = () => {
  let indexShowGreen;
  for (let i = 0; i < numberGuessed.length; i++) {
    indexShowGreen = simonNumbers.indexOf(numberGuessed[i]);
    simonContainerNumbers[indexShowGreen].classList.add("bg-success");
    simonContainerNumbers[indexShowGreen].value = simonNumbers[indexShowGreen];
  }
};

const resetColor = (i) => {
  simonContainerNumbers[i].classList.remove("bg-success");
};

numbersForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userNumbers = [];
  numberGuessed = [];
  for (let i = 0; i < 5; i++) {
    userNumbers[i] = parseInt(simonContainerNumbers[i].value);
    if (simonNumbers.includes(userNumbers[i]))
      numberGuessed.push(userNumbers[i]);
  }
  resetInputValue();
  showGreenGuessedNumbers();
  result.innerHTML = `Hai indovinato i numeri: ${numberGuessed}`;
});

resetButton.addEventListener("click", () => {
  secondsRemaining = secondsToDisappear;
  clearInterval(countdownInterval);
  clearInterval(resetInputValueInverval);
  populateArray();
  startInterval();
  result.innerHTML = "";
});

startInterval();
populateArray();
