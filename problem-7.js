// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.


function removeDuplicates(arr){
    const uniqueSet = new Set(arr);
    const uniqueArray = Array.from(uniqueSet);
    return uniqueArray;
}

arr = [1, 2, 1, 2, 3, 3, 4];
result = removeDuplicates(arr);
console.log(result);