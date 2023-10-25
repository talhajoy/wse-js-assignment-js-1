// Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

function isPrime(number) {
    if (number < 2) {
      return false;
    }
  

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }

result = isPrime(17);
console.log(result);