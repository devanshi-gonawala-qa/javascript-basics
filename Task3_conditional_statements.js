//Q1: Write a JavaScript program that declares a variable, assigns a numeric value to it, and checks whether the number is positive or negative using an if-else statement. Print the result to the console.
let c = -23;
if (c>0){
    console.log(c + " " + "number is Positive");
}
else{
    console.log(c + " " + "number is Negative");
}

//Q2: Write a JavaScript program that declares a variable, assigns a numeric value to it, and checks whether the number is even or odd using an if-else statement. Print the result to the console.
let z = 31;
if (z % 2 == 0){
    console.log(z + " is the even number");
}
else{
    console.log(z + " is the odd number");
}

//Q3: Write a JavaScript program that declares a variable to store a student's marks, and prints the marks based on the following conditions using if-else if-else statements:
// - Distinction (>=75)
// - First Class (>=60)
// - Pass (>=35)
// - Fail (<35)
let marks = 93;
if (marks >= 75){
    console.log(marks + " is Distinction");
}
else if (marks >= 60){
    console.log(marks + " is  First class");
}
else if (marks >= 60){
    console.log(marks + " is Pass");
}
else{
    console.log(marks + " is Fail");
}

//Q4: Write a JavaScript program that declares a variable to store a person's age, and checks whether the person is eligible to vote or not using an if-else statement. A person is eligible to vote if their age is 18 or above. Print the result to the console.
let age = 15;
if (age >= 18){
    console.log("You are eligible for vote");
}
else{
    console.log("You are not eligible for vote");
}

//Q5: Write a JavaScript program that declares two variables, assigns numeric values to them, and finds the largest of the two numbers using an if-else statement. Print the result to the console.
let first = 8;
let second = 19;
if (first > second){
    console.log(first + " number is greater than " + second);
}
else{
     console.log(second + " number is greater than " + first)
}

//Q6: Write a JavaScript program that declares three variables, assigns numeric values to them, and finds the largest of the three numbers using if-else if-else statements. Print the result to the console.
let FIRST = 77;
let SECOND = 88;
let THIRD = 44;
if (FIRST > SECOND && FIRST > THIRD){
    console.log(FIRST + " is the greater than of " + SECOND + " and " + THIRD);
}
else if (SECOND > FIRST && SECOND > THIRD){
    console.log(SECOND + " is the greater than of " + FIRST + " and " + THIRD);
}
else {
    console.log(THIRD + " is the greater than of " + FIRST + " and " + SECOND);
}

//Q7[i]: Write a JavaScript program that uses a switch statement to print the day of the week based on a number (1 to 7), where 1 is Monday and 7 is Sunday. Also write a program that takes a day name as input and prints its corresponding number.
let day = 1;
switch(day){
    case 1:
        console.log("1st is the Monday");
        break;
        case 2:
            console.log("2nd is the Tuesday");
            break;
            case 3:
                console.log("3rd is the Wednesday");
                break;
                case 4:
                    console.log("4th is the Thursday");
                    break;
                    case 5:
                        console.log("5th is the Friday");
                        break;
                        case 6:
                            console.log("6th is the Saturday");
                            break;
                            case 7:
                                console.log("7th is the Sunday");
                                break;
                                default:
                                    console.log("Number is not between 1 to 7");
                                    break;              
}

//Q7[ii] day wise
let dayName = "Thursday";
switch(dayName){
    case dayName = "Monday":
        console.log(1);
        break;
        case dayName = "Tueday":
            console.log(2);
            break;
            case dayName = "Wednesday":
            console.log(3);
            break;
            case dayName = "Thursday":
            console.log(4);
            break;
            case dayName = "Friday":
            console.log(5);
            break;
            case dayName = "Saturday":
            console.log(6);
            break;
            case dayName = "Sunday":
            console.log(7);
            break;
            default:
                console.log("This is not day's name");
                break;
}

//Q8: Write a JavaScript program that declares a variable to store a year, and checks whether it is a leap year or not using if-else statements. Print the result to the console.
let year = 2024;
if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)){
    console.log(year + " is a leap year");
}
else{
    console.log(year + " is not a leap year");
}
