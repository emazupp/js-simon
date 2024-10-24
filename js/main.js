const simonContainerNumbers = document.querySelectorAll(".simon-numbers");
const secondsRemainingCounter = document.getElementById("seconds-remaining");
const numbersForm = document.getElementById("numbers-form");
const secondsToDisappear = 5;
let simonNumbers = [];
let secondsRemaining = secondsToDisappear;
secondsRemainingCounter.innerHTML = secondsRemaining;

const generateNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

setInterval(() => {
  for (let i = 0; i < 5; i++) {
    simonContainerNumbers[i].value = "";
  }
}, secondsToDisappear * 1000);

const countdown = () => {
  if (secondsRemaining <= 1) {
    clearInterval(countdownInterval);
  }
  secondsRemaining--;
  secondsRemainingCounter.innerHTML = secondsRemaining;
};

numbersForm.addEventListener("submit", () => {
  const userNumbers = [];
  for (let i = 0; i < 5; i++) {
    userNumbers[i] = simonContainerNumbers[i].value;
  }
  console.log(userNumbers);
});

/* popolo l'array di valori casuali */
for (let i = 0; i < 5; i++) {
  simonNumbers[i] = generateNumber(0, 20);
  simonContainerNumbers[i].value = simonNumbers[i];
}
const countdownInterval = setInterval(countdown, 1000);
