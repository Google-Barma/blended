'use strict';

//рекурсивная в итеративной
const smallestDivisor = num => {
  if (num === 1) {
    return 1;
  }
  const iter = (counter, acc) => {
    if (counter % acc === 0) {
      return acc;
    }
    return iter(counter, acc + 1);
  };
  return iter(num, 2);
};

console.log(smallestDivisor(7));

//рекурсивная функция /факторифл/

const factorial = n => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

const answer = factorial(3);
