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
