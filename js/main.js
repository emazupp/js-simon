const simonContainerNumbers = document.querySelectorAll(".simon-numbers");
const secondsRemainingCounter = document.getElementById("seconds-remaining");
const secondsToDisappear = 5;
let simonNumbers = [];
let secondsRemaining = secondsToDisappear;
secondsRemainingCounter.innerHTML = secondsRemaining;

const generateNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

for (let i = 0; i < 5; i++) {
  simonNumbers[i] = generateNumber(0, 20);
  simonContainerNumbers[i].value = simonNumbers[i];
}

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

const countdownInterval = setInterval(countdown, 1000);
