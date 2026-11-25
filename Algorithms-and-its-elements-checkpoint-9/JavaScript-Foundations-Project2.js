//Function to reverse a given word
function reverseString(word) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
// Function that count number of characters in a string 
function count(str) {
  let counter = 0;
  for (const char of str) {
    counter += 1;
  }
  return counter;
}
//function that capitlize Words of each first word in the sentence
function capitalizeWords(sentence) {
  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char === " ") {
      result += char;
      capitalizeNext = true;
    } else if (capitalizeNext) {
      result += char.toUpperCase();
      capitalizeNext = false;
    } else {
      result += char;
    }
  }

  return result;
}
//Array functione find minimum and maximum of array number
function findMinMax(numbers) {
  let min = numbers[0];
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return { min, max };
}
//Sum of Array: Create a function that calculates the sum of all elements in an array.
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
//Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, condition) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
// Factorial: Write a function to calculate the factorial of a given number.
function factorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}
//Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
//Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
//Fibonacci function
function fibonacci(terms) {
  if (terms <= 0) {
    return new Array();
  }

  const sequence = new Array();
  sequence[0] = 0;

  if (terms === 1) {
    return sequence;
  }

  sequence[1] = 1;

  for (let i = 2; i < terms; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence;
}

// Examples:
// fibonacci(6) -> [0, 1, 1, 2, 3, 5]
// fibonacci(1) -> [0]
// fibonacci(0) -> []
