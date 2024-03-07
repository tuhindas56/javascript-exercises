const findTheOldest = function (array) {
  const date = new Date().getFullYear();
  for (let person of array) {
    person.yearOfDeath == undefined
      ? (person.age = date - person.yearOfBirth)
      : (person.age = person.yearOfDeath - person.yearOfBirth);
  }
  return array.sort((a, b) => (a.age > b.age ? -1 : 1))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
