// /*Q1: Write a JavaScript program that uses nested for loops to print the following star triangle pattern:
// *
// **
// ***
// ****
// ******/
console.log("Star pattern");
for (let i = 1; i<=5; i++){ //rows decide i [outer loop and j inner loop]
    let pattern = ""; // new 
    for (let j = 1; j<= i; j++){ //how many star prints 1 row 1 star , 2nd row 2 star
        pattern += "*"; //every time outer loop creates one row
    }
    console.log(pattern); //prints
}

//Q2: Write a JavaScript program that uses nested for loops to print the following reverse star triangle pattern:
// *****
// ****
// ***
// **
// *
console.log("Reverse star pattern");
for (let i = 5; i>=1 ; i--){
    let pattern = "";
    for (let j = 1; j<= i ; j++){
        pattern += "*";
    }
console.log(pattern)
}

//Q3: Write a JavaScript program that uses nested for loops to print the following number triangle pattern:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
console.log("Traingle pattern");
for (let i = 1; i <= 5; i++){
    pattern = "";
    for (let j = 1; j<= i; j++){
        pattern+=j + " "; //pattern j = patern + j //let pattern = "1 ";let j = 2;
    }
    console.log(pattern);
}

//Q4: Write a JavaScript program that uses nested for loops to print the following pattern where each row contains the same number repeated equal to the row number:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
console.log("same number Traingle pattern");
for (let i = 1 ; i <= 5; i ++){
    pattern = "";
    for (let j = 1 ; j <=i; j++){
        pattern+=i + " ";
    }
    console.log(pattern);
}

//Q5: Write a JavaScript program that uses nested for loops to print the following pyramid star pattern:
// *
// ***
// *****
// *******
// *********
console.log("pyramid pattern");
for (let i = 1; i<=5; i++){
    pattern = "";
    for (let j = 1; j <= (2 * i -1); j ++){
        pattern += "*";
    }
    console.log(pattern);
} 

// right trangle
for (let i = 1; i<= 5-i; i ++){
    pattern = ""
    for (let j = 1 ; j<=(" " + i) ; j ++){
     pattern += "*"
    }
        console.log(pattern)
}