const fibonacci = function (n) {
  if (typeof n !== "number") {
    n = +n;
  }
  if (n < 0) {
    return "OOPS";
  }
  let fibonacci = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci[n];
};

// Do not edit below this line
module.exports = fibonacci;
