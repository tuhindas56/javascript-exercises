const sumAll = function (firstNumber, lastNumber) {
  if (typeof firstNumber !== "number" || typeof lastNumber !== "number" || firstNumber < 0 || lastNumber < 0) {
    return "ERROR";
  }
  return firstNumber < lastNumber
    ? ((lastNumber - firstNumber + 1) * (firstNumber + lastNumber)) / 2
    : ((firstNumber - lastNumber + 1) * (lastNumber + firstNumber)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
