//  Code in Javascript
// Q1 : Print even and odd numbers from 1 to 50
console.log("Even numbers");
for (let i = 0; i <=50; i++){
    if (i % 2 ===0){
        console.log("Even number");
        console.log(i);
    }
}

console.log("Odd numer");
for (let i = 0; i<=50; i++){
    if (i %2 !== 0){
        console.log("Odd number");
        console.log(i)
    }
}

// Q2: Write a JavaScript program that uses a for loop to print all multiples of 5 from 1 to 100
console.log("Multiplies number prints with 5");
for (let i = 1; i <=100; i++){
    if(i%5 ===0){
        console.log(i);
    }
}

// Q3 : Write a JavaScript program that uses a for loop to print all numbers divisible by 3 between 1 and 30.
console.log("Divisable by 3");
for (let i = 1; i <=30; i++){
    if (i%3===0){
        console.log(i);
    }
}

// Q4 : Write a JavaScript program that uses a for loop to print the square and cube of every number from 1 to 10.
console.log("square and cube of every number 1 to 10")
for (let i = 1; i <=10; i++){
    let square = i**2;
    let cube = i**3;
    console.log("Number", i);
    console.log("Square", square);
    console.log("Cube", cube);
}

//Q5: Write a JavaScript program that uses a for loop to find and print the sum of all even numbers and the sum of all odd numbers separately from 1 to 50.
console.log("Sum even numbers and odd numbers")
let evenSum = 0;
let oddSum = 0;
for (let i = 1; i<=50; i ++){
    if (i%2===0){
        evenSum = evenSum + i;
    }
    else{
        oddSum = oddSum + i;
    }
}
console.log("Sum of even numbers:", evenSum);
console.log("Sum of Odd numbers: ", oddSum);

// Q6: Write a JavaScript program that uses a for loop to print the multiplication table of 7 from 1 to 10.
console.log("Multiplication of 7 in 1 to 10 numbers");
for (let i = 1; i<=10; i++){
        console.log("7 * " + i + " = " + (7*i));
    }

// Q7: Write a JavaScript program that declares a variable, assigns a numeric value to it, and finds its factorial using a for loop. Print the result to the console.
let num  = 7;
let fectorial = 1;
for (let i = 1; i<=num; i++){
    fectorial = fectorial * i;
}
        console.log("Fectorial of " + num + " is " + fectorial);

// Q8 : Write a JavaScript program that declares a variable, assigns a numeric value to it, and reverses the number using a while loop. Print the reversed number to the console.
let Num1 = 56456;
let reverse = 0;
while (Num1 > 0){
    let digit = Num1 % 10;
    reverse = reverse * 10 + digit;
    Num1 = Math.floor(Num1/10);
}
console.log("Reversed number:", reverse);


//  i am consusing for next question so ma'am will explain i will do next question

// Q9. Write a JavaScript program that declares a variable, assigns a numeric value to it, and uses a while loop to count how many digits are present in the number and also find the sum of all its digits. Print both results to the console.
let num3 = 12345;
let temp = num3;
let count = 0;
let sum = 0;
while (temp > 0){
    let digit = temp % 10;
    sum = sum + digit;
    count ++;
    temp = Math.floor(temp / 10);
    } 
console.log("Number of digits : " + count);
console.log("Sum of digits : " + sum);

// Q10: Write a JavaScript program that declares a variable, assigns a numeric value to it, and checks whether the number is a palindrome or not using a while loop. A number is a palindrome if it reads the same forwards and backwards. Print the result to the console.
let num4 = 121;
let temp1 = num4; // because orginal value be safe that num4 value stores in temp1
let reverse1 = 0;
while (temp1 > 0){
    let digit1 = temp1 % 10;
    reverse1 = reverse1 * 10 + digit1;
    temp1 = Math.floor(temp1 / 10);
}
if (num4 === reverse1){
    console.log("Palindrome")
} 
else{
    console.log("Not Palindrome")
}

// Q11: Write a JavaScript program that declares a variable, assigns a numeric value to it, and checks whether the number is a prime number or not using a for loop. Print the result to the console.
let num5 = 520;
isPrime = true;
for (let i = 2 ; i < num5 ; i++){
    if (num5 % i === 0){
        isPrime = false;
    }
    break;
}
if (isPrime){
    console.log(num5 + " is prime number");
}
else{
    console.log(num5 + " is not a prime number");
}

// Q12: Write a JavaScript program that uses a for loop to print the first 10 numbers of the Fibonacci series.
let a = 0;
let b = 1;
for (let i = 0; i< 10; i++){
    console.log(a)
let nextt = a + b;
a = b;
b = nextt;
}

// Q13: Write a JavaScript program that declares a variable, assigns a numeric value to it, and checks whether it is an Armstrong number or not using a while loop. Print the result to the console.
let armstrongcheck = 236;
let temp3 = armstrongcheck;
let sum4 = 0;
while (temp3 > 0){
    let digittt = temp3 % 10;
    sum = sum + digittt **3;
    temp3 = Math.floor(temp3/10); 
}
if (sum === armstrongcheck){
    console.log(armstrongcheck + " is armstrong number");
}
else{
    console.log(armstrongcheck + " is not a armstrong number");
}

//Q14: Write a JavaScript program that uses a for loop to calculate and print the sum of squares of all numbers from 1 to 10. (1² + 2² + 3² + ... + 10²)

let squarecheck = 0;
for (let i = 1 ; i <= 10 ; i++){
    squarecheck = squarecheck + (i* i);
}
console.log("Sum of squares : " + squarecheck);

// Q15: Write a JavaScript program that uses a for loop to find the largest and second largest numbers between 1 and 100 that are divisible by 9. Print both results to the console.
let largest = 0;
let secondLargest = 0;
for (let i = 1; i <=100; i ++){
    if (i % 9 === 0){
    secondLargest = largest;
    largest = i;
}
}
console.log("Largest: " + largest);
console.log("Secondlargest: " + secondLargest);

