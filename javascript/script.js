function getRandomInt(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min +1)) + min;
}

const data = function () {
  let A_number = []
  for (let i = 0; i < 100; ++i) {
    A_number.push(getRandomInt(-10, 40));
  }
  return A_number;
};

