const generateNumber = (min, max) => {
  const number = Math.floor(Math.random() * (max - min) + min);
  console.log(number);
};

generateNumber(0, 20);
