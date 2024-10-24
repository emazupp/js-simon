const simonContainerNumbers = document.querySelectorAll(".simon-numbers");
const numbersForm = document.getElementById("numbers-form");
const result = document.getElementById("result");
const resetButton = document.getElementById("reset-button");
const title = document.getElementById("title");
const secondsToDisappear = 5; //SET SECONDI PRIMA CHE SCOMPAIONO I VALORI
let countdownInterval;
let resetInputValueInverval;
let simonNumbers = [];
let numberGuessed = [];
let userNumbers = [];
let secondsRemaining = secondsToDisappear;

const minNumberGen = 0; //SET MINIMO NUMERI GENERATI
const maxNumberGen = 100; //SET MASSIMO NUMERI GENERATI

const generateNumber = (min, max) => {
  const num = Math.floor(Math.random() * (max - min) + min);
  return simonNumbers.includes(num) ? generateNumber(min, max) : num;
};

const populateArray = () => {
  for (let i = 0; i < 5; i++) {
    simonNumbers[i] = generateNumber(minNumberGen, maxNumberGen);
    simonContainerNumbers[i].value = simonNumbers[i];
    resetColor(i);
  }
};

const resetInputValue = () => {
  if (secondsRemaining <= 1) {
    title.innerHTML = "Spero che hai memorizzato i numeri, INSERISCILI!";
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
  title.innerHTML = `Questi numeri scompariranno in ${secondsRemaining} secondi`;
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

const validateUserNumbers = () => {
  let numberOfRepetitions = 0;
  for (let i = 0; i < 5; i++) {
    userNumbers[i] = parseInt(simonContainerNumbers[i].value);
    if (isNaN(userNumbers[i])) return false;
  }
  for (let i = 0; i < userNumbers.length; i++) {
    const currentUserNumber = userNumbers[i];
    numberOfRepetitions = 0;
    for (let j = 0; j < userNumbers.length; j++) {
      if (currentUserNumber == userNumbers[j]) numberOfRepetitions++;
    }
    if (numberOfRepetitions > 1) return false;
  }
  return true;
};

numbersForm.addEventListener("submit", (e) => {
  e.preventDefault();
  userNumbers = [];
  numberGuessed = [];
  if (validateUserNumbers()) {
    for (let i = 0; i < 5; i++) {
      if (simonNumbers.includes(userNumbers[i]))
        numberGuessed.push(userNumbers[i]);
    }
    resetInputValue();
    if (numberGuessed.length > 0) {
      showGreenGuessedNumbers();
      result.classList.remove("text-danger");
      result.classList.add("text-success");
      result.innerHTML = `Hai indovinato i numeri: ${numberGuessed}`;
    } else {
      result.classList.remove("text-success");
      result.classList.add("text-danger");
      result.innerHTML = `Mi dispiace non hai indovinato neanche un numero`;
    }
  } else {
    result.classList.remove("text-success");
    result.classList.add("text-danger");
    result.innerHTML = `Non sono ammesse parole o doppioni`;
  }
});

resetButton.addEventListener("click", () => {
  secondsRemaining = secondsToDisappear;
  clearInterval(countdownInterval);
  clearInterval(resetInputValueInverval);
  populateArray();
  startInterval();
  result.innerHTML = "";
  title.innerHTML = `Questi numeri scompariranno in ${secondsToDisappear} secondi`;
});

startInterval();
populateArray();
