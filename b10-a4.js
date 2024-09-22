


function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return 'Invalid Input';
    }
    const regex = /\d/;
    return regex.test(name);
}

const name1 = "Rahim Khan";
const name2 = "Rahim123 Khan";
const name3 = 123;

console.log(checkDigitsInName(name1)); // false
console.log(checkDigitsInName(name2)); // true
console.log(checkDigitsInName(name3)); // Invalid Input


function validateStudentData(student) {
    // প্রয়োজনীয় প্রোপার্টিগুলো আছে কিনা চেক করা
    if (!student.hasOwnProperty('name') ||
        !student.hasOwnProperty('testScore') ||
        !student.hasOwnProperty('schoolGrade') ||
        !student.hasOwnProperty('isFFamily')) {
        return 'Invalid input: Missing required properties';
    }

    // ডাটা টাইপগুলো যাচাই করা
    if (typeof student.name !== 'string' ||
        typeof student.testScore !== 'number' ||
        typeof student.schoolGrade !== 'number' ||
        typeof student.isFFamily !== 'boolean') {
        return 'Invalid input: Incorrect data types';
    }

    // স্কোরের সীমা যাচাই করা
    if (student.testScore > 50 || student.schoolGrade > 30) {
        return 'Invalid input: Scores are out of range';
    }

    // সবকিছু ঠিক থাকলে একটি বার্তা রিটার্ন করা
    return 'Input is valid';
}

// উদাহরণ
const validStudent = {
    name: 'Rahim',
    testScore: 45,
    schoolGrade: 28,
    isFFamily: true
};

const invalidStudent1 = {
    name: 'Karim',
    testScore: 60, // স্কোর 50 এর বেশি
    schoolGrade: 25
};

const invalidStudent2 = {
    name: 123, // নাম স্ট্রিং হওয়া উচিত
    testScore: 40,
    schoolGrade: 30
};

console.log(validateStudentData(validStudent)); // Output: Input is valid
console.log(validateStudentData(invalidStudent1)); // Output: Invalid input: Scores are out of range
console.log(validateStudentData(invalidStudent2)); // Output: Invalid input: Incorrect data types