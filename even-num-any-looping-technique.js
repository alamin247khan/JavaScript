const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];

//let i = 0; 
// while (i < numbers.length) {
//     if (numbers[i] % 2 === 0){
//         evenNumbers.push(numbers[i]);
//     }
//     i++
// }
// console.log(evenNumbers);


for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log(evenNumbers);