"use strict";

// question - 1
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// question 2
function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log(maxOfThree(1, 20, 3));

//question - 3

function isVowel(c) {
  if (typeof c != "string" || c == undefined) {
    throw new Error("argument has to be type string");
  }
  if (c.length > 1) {
    throw new Error("length must be 1");
  }
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(c.toLowerCase());
}

console.log(isVowel("e"));

//question - 4
function sum(numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}

function multiply(numbers) {
  let total = 1;
  for (let n of numbers) {
    total *= n;
  }
  return total;
}

console.log("sum", sum([2, 3, 4]), "and", multiply([1, 2, 3]));

// question - 5
function reverse(word) {
  let result = "";
  let len = word.length - 1;
  for (let i = len; i >= 0; i--) {
    result += word.charAt(i);
  }
  return result;
}
console.log("reversed: ", reverse("grew"));

// question 6

function findLongestWord(words) {
  if (words.length == 0) throw new Error("cannot be null");
  let longest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
console.log(
  "longest:",
  findLongestWord(["one", "two2", "oneoneone", "sentence is the sentence"])
);

// question 7
function filterLongWords(words, index) {
  return words.filter((word) => word.length > index);
}
console.log("Long: ", filterLongWords(["banana", "Orange", "Lemon"], 5));

// question 8
function computeSumOfSquares(numbers) {
  return numbers.map((n) => n * n).reduce((a, b) => a + b, 0);
}

console.log("result: ", computeSumOfSquares([1, 2, 3]));

// question 9
function printOddNumbersOnly(numbers) {
  numbers.forEach((n) => {
    if (n % 2 !== 0) {
      console.log(n);
    }
  });
}
printOddNumbersOnly([12, 3, 5, 54, 0]);

// question 10
function computeSumOfSquaresOfEvensOnly(numbers) {
  return numbers
    .filter((n) => n % 2 === 0)
    .map((n) => n * n)
    .reduce((a, b) => a + b, 0);
}

console.log("computeSEvent", computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));

// question 11

function sumReduce(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

function multiplyReduce(numbers) {
  return numbers.reduce((a, b) => a * b, 1);
}

// question 12
function printFibo(n, a, b) {
  let fibA = [a, b];
  let i = 2;
  while (i < n) {
    fibA[i] = fibA[i - 1] + fibA[i - 2];
    i++;
  }
  console.log(fibA.join(" "));
}
printFibo(6, 0, 1);
