// Create a function calculateFactorial that takes a number and returns its factorial.

function factorial(number){
    if(number < 0){
        return "Number must be positive";
    }else {
        result = 1;
        for(let i = number; i > 0; i--){
        result *= i;
        }
        return result;
    }
}

result = factorial(5);
console.log(result);