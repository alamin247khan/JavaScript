// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function makeAvg(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const average = makeAvg(numbers);
console.log(average);