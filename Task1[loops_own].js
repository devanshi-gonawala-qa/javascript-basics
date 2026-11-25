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
    if (i %2 ===0){
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

