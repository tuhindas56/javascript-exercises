const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numberArray) {
  return numberArray.reduce((sum, value) => sum + value, 0);
};

const multiply = function (numberArray) {
  return numberArray.reduce((multiply, value) => multiply * value, 1);
};

const power = function (number, raisedTo) {
  return number ** raisedTo;
};

const factorial = function (number) {
  if (number == 0) {
    return 1;
  }
  let factorial = 1;
  for (let i = number; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
