// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

function evenOdd(str) {
    const length = str.length;
    if (length % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

result = evenOdd('Hello');
console.log(result);