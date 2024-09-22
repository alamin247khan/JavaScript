function checkDigitsInName(name) {
  if (typeof name !== 'string') {
    return 'Invalid Input';
  }

  const regex = /\d/;
  
  return regex.test(name);
}

// স্যাম্পল ইনপুট এবং আউটপুট
const sampleInputs = [
  "Raj123",
  "n9ayeem",
  "e1mu3",
  "Suman",
  "Name2024",
  "!@#",
  ["Raj"]
];

sampleInputs.forEach(input => {
  console.log(`Input: ${input}`);
  console.log(`Output: ${checkDigitsInName(input)}`);
  console.log();
});