function sum(a, b, c) {
    const args = [...arguments];
    console.log(args);
    const result = a + b + c;
    return result;
}

const total = sum(45, 54, 67);
console.log(total);