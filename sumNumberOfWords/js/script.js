'use strict';

function duplicateEncode(word) {
  let sortWords = [];
  const wordsObj = word
    .toLowerCase()
    .split('')
    .reduce((acc, character) => {
      acc[character] = acc.hasOwnProperty(character)
        ? (acc[character] += 1)
        : (acc[character] = 1);
      return acc;
    }, {});
  for (let word in wordsObj) {
    sortWords.push([word, wordsObj[word]]);
  }

  return sortWords.sort((a, b) => b[1] - a[1]);
}

console.table(duplicateEncode('din'));
console.table(duplicateEncode('recede'));
console.table(duplicateEncode('Success'));
console.table(duplicateEncode('(( @'));
