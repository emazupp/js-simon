const simonContainerNumbers = document.querySelectorAll(".simon-numbers");
const secondsRemainingCounter = document.getElementById("seconds-remaining");
const numbersForm = document.getElementById("numbers-form");
const secondsToDisappear = 2;
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
const userNumbers = [];

numbersForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberGuesses = [];
  for (let i = 0; i < 5; i++) {
    userNumbers[i] = simonContainerNumbers[i].value;
    console.log("userNumbers[i]: ", userNumbers[i]);
    console.log(simonNumbers);
    console.log(
      "condizione if, se simonnumbers includes usernumber[i] ",
      simonNumbers.includes(userNumbers[i])
    );
    if (simonNumbers.includes(userNumbers[i]))
      numberGuesses.push(userNumbers[i]);
  }
  console.table(numberGuesses);
});

/* popolo l'array di valori casuali */
for (let i = 0; i < 5; i++) {
  simonNumbers[i] = generateNumber(0, 20);
  simonContainerNumbers[i].value = simonNumbers[i];
}

const countdownInterval = setInterval(countdown, 1000);
const resetInputValueInverval = setInterval(
  resetInputValue,
  secondsToDisappear * 1000
);
