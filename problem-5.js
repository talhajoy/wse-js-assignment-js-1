// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

function mergeArrays(array, anotherArray){
    return array.concat(anotherArray);
}

arrayOne = [1, 2, 3];
arrayTwo = [4, 5];
result = mergeArrays(arrayOne, arrayTwo);

console.log(result);