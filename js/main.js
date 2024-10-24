const simonContainerNumbers = document.querySelectorAll(".simon-numbers");
const generateNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

let simonNumbers = [];
for (let i = 0; i < 5; i++) {
  simonNumbers[i] = generateNumber(0, 20);
  simonContainerNumbers[i].innerHTML = simonNumbers[i];
}
