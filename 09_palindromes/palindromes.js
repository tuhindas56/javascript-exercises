const palindromes = function (getInput) {
  let input = getInput.toString().toLowerCase().replaceAll(/([\W])/g, "");
  let reverse = Array.from(input).toReversed().join("");
  return input === reverse ? true : false;

};
// Do not edit below this line
module.exports = palindromes;
