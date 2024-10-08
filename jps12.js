function sum(a, b, c) {
    const args = [...arguments];
    const result = a + b + c;
    return result;
}
const total = sum(45, 89, 12, 33, 98);
console.log(sum.length);