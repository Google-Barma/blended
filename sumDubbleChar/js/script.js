'use strict';

function getAmountRepetitions(array) {
  let repeatLetters = {};
  let num = 0;

  for (let i = 0; i < array.length; i += 1) {
    repeatLetters[array[i]] = 1;
    for (const key in repeatLetters) {
      if (key === array[i]) {
        console.log(key);
        console.log(array[i]);
      }
    }
  }

  return repeatLetters;
}

console.log(getAmountRepetitions('Hello'));
console.log(getAmountRepetitions('лиллепутfff'));
