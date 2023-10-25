// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

function convertToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

result = convertToCelsius(100);
console.log(result)