// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "This is a leap year";
    } else {
        return "Not a leap year";
    }
}

result = isLeapYear(2012);

console.log(result);