const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  } else if (num == undefined)
  {
    num = Math.floor(Math.random());
    return string.repeat(num);
  } else {
    return string.repeat(num);
  }
};
// Do not edit below this line
module.exports = repeatString;
