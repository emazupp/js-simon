/* const simonContainerNumbers = document.querySelectorAll(".simon-numbers");
const numbersForm = document.getElementById("numbers-form");
const result = document.getElementById("result");
const resetButton = document.getElementById("reset-button");
const title = document.getElementById("title");
const secondsToDisappear = 5;
let countdownInterval;
let resetInputValueInverval;
let simonNumbers = [];
let numberGuessed = [];
let secondsRemaining = secondsToDisappear;

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
  title.innerHTML = `Questi numeri scompariranno in ${secondsToDisappear} secondi`;
});

startInterval();
populateArray();
 */
let array = [];
function generanumero() {
  const num = Math.floor(Math.random() * 10 - 1) + 1;
  return array.includes(num) ? generanumero() : num;
}

for (let i = 0; i < 10; i++) {
  array[i] = generanumero();
}
console.log(array);
