// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function evenOddOperation(number) {
    if (number % 2 === 0) {
        return number / 2;
    } else {
        return number * 2;
    }
}

// Example usage:
const result = evenOddOperation(5); // 5 is odd, so it's multiplied by 2
console.log(result);

const result2 = evenOddOperation(8); // 8 is even, so it's divided by 2
console.log(result2); 