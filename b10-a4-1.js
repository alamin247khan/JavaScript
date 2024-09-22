function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    }

    const netIncome = income - expenses;
    const taxAmount = netIncome * 0.20;
    
    return taxAmount;
}

const harunsIncome = 500888880;
const harunsExpense = 222500;
const harunsTax = calculateTax(harunsIncome, harunsExpense);

console.log("হারুণের মাসিক ট্যাক্স:", harunsTax);