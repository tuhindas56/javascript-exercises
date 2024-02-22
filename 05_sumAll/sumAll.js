const sumAll = function (firstNumber, lastNumber) {
  if (typeof firstNumber === "number" && typeof lastNumber === "number") {
    if (firstNumber > 0 && lastNumber > 0) {
      if (firstNumber < lastNumber) {
        return (
          ((lastNumber - firstNumber + 1) * (firstNumber + lastNumber)) / 2
        );
      } else {
        return (
          ((firstNumber - lastNumber + 1) * (lastNumber + firstNumber)) / 2
        );
      }
    } else {
      return "ERROR";
    }
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;

