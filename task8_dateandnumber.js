//Q1: Write a JavaScript program that creates a Date object and prints the current date to the console.
var date = new Date();
console.log(date);

//Q2.Write a JavaScript program that creates a Date object and prints the current year, month, and day separately to the console using built-in Date methods.
var date = new Date();
console.log("Current year is : " + date.getFullYear());
console.log("Current Month is : " + (date.getMonth() + 1));
console.log("Current Day is : " + date.getDate());

// Q3: Write a JavaScript program that creates a Date object and prints the current hours, minutes, and seconds separately to the console using built-in Date methods.
var date = new Date();
console.log("Hour : " + date.getHours());
console.log("Minute : " + date.getMinutes());
console.log("Seconds : " + date.getSeconds());

// Q4: Write a JavaScript program that creates a date "2025-01-01" and prints it in DD-MM-YYYY format to the console using built-in Date methods.
var date = new Date("2025-01-01");
console.log(date.getDate() + "-"+ (date.getMonth() + 1) + "-" + date.getFullYear());

//Q5: Write a JavaScript program that calculates and prints the number of days between today's date and "2025-12-31" using Date objects.
var today = new Date();
var target = new Date("2025-12-31");

var days = Math.abs(today - target) / (1000 * 60 * 60 * 24);
console.log("Between Two Date calculation: " + Math.floor(days));

//Q6: Write a JavaScript program that gets the current date, adds 10 days to it, and prints the new date in DD-MM-YYYY format to the console.
var date = new Date()
date.setDate(date.getDate() + 10);
var day = String(date.getDate()).padStart(2, "0");
var month = String(date.getMonth()+1).padStart(2,"0");
var year = date.getFullYear();
console.log(day + "-"+ month + "-" + year);

//Q7: Write a JavaScript program that declares a variable to store a year and checks whether it is a leap year or not using if-else statements. Print the result to the console.
let checkleapyear = 2025;
if (checkleapyear % 400 ===0 || checkleapyear % 4 === 0 && checkleapyear % 100 !== 0){
    console.log(checkleapyear + " is a leap year")
}
else{
    console.log(checkleapyear + " is not leap year")
}

//Q8: Write a JavaScript program that generates a random number between 1 and 100 using the Math object and prints it to the console.
let randomnumber = Math.floor(Math.random()* 100)+1;
console.log(randomnumber);

//Q9: Write a JavaScript program that declares a variable with the value 78.4567 and rounds it to 2 decimal places using the toFixed() method. Print the result to the console.
let fixvalue = 78.4567;
console.log(fixvalue.toFixed(2));

//Q10: Write a JavaScript program that declares an array [15, 8, 120, 45, 60] and finds the maximum and minimum numbers from it using Math.max() and Math.min(). Print both results to the console.
let findvalue = [15, 8, 120, 45, 60]
console.log(Math.max(...findvalue)); 
console.log(Math.min(...findvalue));



