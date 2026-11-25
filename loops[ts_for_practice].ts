// Code in Typescript
// Q1 : Print even and odd numbers from 1 to 50
console.log("Even numbers");
for (let i:number = 0; i <=50; i++){
    if (i % 2 ===0){
        console.log("Even number");
        console.log(i);
    }
}

console.log("Odd numer");
for (let i:number = 0; i<=50; i++){
    if (i %2 ===0){
        console.log("Odd number");
        console.log(i)
    }
}

// Q2: Write a JavaScript program that uses a for loop to print all multiples of 5 from 1 to 100
console.log("Multiplies number prints with 5");
for (let i:number = 1; i <=100; i++){
    if(i%5 ===0){
        console.log(i);
    }
}

// Q3 : Write a JavaScript program that uses a for loop to print all numbers divisible by 3 between 1 and 30.
console.log("Divisable by 3");
for (let i:number = 1; i <=30; i++){
    if (i%3===0){
        console.log(i);
    }
}

// Q4 : Write a JavaScript program that uses a for loop to print the square and cube of every number from 1 to 10.
console.log("square and cube of every number 1 to 10")
for (let i:number = 1; i <=10; i++){
    let square:number = i**2;
    let cube:number = i**3;
    
    console.log("Number", i);
    console.log("Square", square);
    console.log("Cube", cube);
    
}