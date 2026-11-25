// Q1: Write a JavaScript program that creates a function named greet which prints "Hello STAD" to the console and calls the function.
function greet(){
    console.log("Hello STAD");
}
greet();

// Q2. Write a JavaScript program that creates a function named greetUser which takes a name as a parameter and prints "Hello <name>" to the console. Call the function with a name value.
function greetUser(name){
    console.log("Hello " + name);
}
greetUser("Devanshi");

// Q3. Write a JavaScript program that creates a function named addNumbers which takes two numbers as parameters, adds them, and returns the result. Print the returned result to the console.
function addNumbers(a,b){
    return result = a + b;
}
console.log(addNumbers(30,35));

// Q4. Write a JavaScript program that creates a function named checkEvenOdd which takes a number as a parameter and prints whether the number is even or odd to the console. Call the function with a numeric value.
function checkEvenOdd(number){
    if (number % 2 === 0){
        console.log(number + " This number is even");
    }
    else{
        console.log(number + " This number is odd");
    }
}
checkEvenOdd(54);

// Q5. Write a JavaScript program that creates a function named findSquare which takes a number as a parameter, calculates its square, and returns the result. Print the returned result to the console.
function findSquare(number){
    return number * number;
}
console.log("Square calculation is : " + findSquare(10));

// Q6. Write a JavaScript program that creates a function named findMax which takes two numbers as parameters and returns the larger of the two numbers. Print the returned result to the console.
function findMax(x,y){
    if (x > y){
        return x;
    }
    else{
        return y;
    }
}
console.log("The greater number is : " + findMax(25,35));
                        //  OR 

// function findMax(x,y){
//     return Math.max(x,y);
// }
// console.log("The greater number is : " + findMax(25,35));

// Q7. Write a JavaScript program that creates a function named countVowels which takes a string as a parameter, counts the total number of vowels in it, and returns the count. Print the returned result to the console.
function countVowels(str){
    let count = 0;
    const vowels = "aeiouAEIOU"

    for (let char of str)
        if (vowels.includes(char)){
            count++;
        }
        return count
}
console.log("Total vowels are: " + countVowels("Automation Testing"));

// Q8: Write a JavaScript program that creates a function named reverseString which takes a string as a parameter, reverses it using a for loop, and returns the reversed string. Print the returned result to the console.
function reverseString(str){
    let reversed = "";
    for (let i = str.length - 1 ; i >=0 ; i--){
        reversed = reversed + str[i];
    }
    return reversed;
}
console.log("Reverse word is : " + reverseString("Tester"))

// Q9. Write a JavaScript program that creates a function named isPrime which takes a number as a parameter and returns true if the number is prime, otherwise returns false. Print the returned result to the console.
function isPrime(n){
    if (n < 2 ){
        return false
}
for (let i = 2 ; i < n ; i ++){
    if (n % i === 0){
        return false;
    }
        return true;
    }
}
console.log(isPrime(7));

// Q10: Write a JavaScript program that creates a function named findFactorial which takes a number as a parameter, calculates its factorial using a for loop, and returns the result. Print the returned result to the console.
function findFactorial(num1){
    let fectorial = 1;
    for (let i = 1; i <=num1; i++){
        fectorial = fectorial * i 
    }
    return fectorial;
}
console.log ("Fectorial ans is : " + findFactorial(5));
    