/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
    code js
*/

let ticketfare = 800;
let age = 60;
let student = true;
if (age<10){
    let ticketfee = 0*ticketfare;
    console.log("Children Free", ticketfee)
}
else if(age>=60) {
    let ticketfee = ticketfare * .85;
    console.log("Senior citizens", ticketfee)
}
else if(student == true){
    let ticketfee = ticketfare * 0.5;
    console.log("Students 50% discount", ticketfee)
}
else{
    console.log("Regular ticket fare 800 tk")
};

