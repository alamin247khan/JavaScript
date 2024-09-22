function calculateFinalScore(obj) {
    const maxTestScore = 50;
    const maxSchoolGrade = 30;
    const bonusForFFamily = 20;

    if (typeof obj !== "object" || !obj.hasOwnProperty("name") || !obj.hasOwnProperty("testScore") || !obj.hasOwnProperty("schoolGrade") || !obj.hasOwnProperty("isFFamily")) {
        return "Invalid Input";
    }

    if (obj.testScore > maxTestScore || obj.schoolGrade > maxSchoolGrade || obj.testScore < 0 || obj.schoolGrade < 0) {
        return "Invalid input";
    }

    let finalScore = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily) {
        finalScore += bonusForFFamily;
    }

    if (finalScore >= 80) {
        return true;
    } else {
        return false;
    }
}

// Sample inputs
const obj1 = { name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true };
const obj2 = { name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false };
const invalidInput = "hello";
const obj3 = { name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true };

// ফাংশন কল করে ফলাফল প্রিন্ট করা
console.log(calculateFinalScore(obj1));
console.log(calculateFinalScore(obj2));
console.log(calculateFinalScore(invalidInput));
console.log(calculateFinalScore(obj3));