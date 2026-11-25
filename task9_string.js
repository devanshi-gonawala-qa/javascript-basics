//Q1: Write a JavaScript program that creates a string "Automation Testing" and prints its length to the console using the length property.
let string = "Automation Testing";
console.log(string.length);

//Q2: Write a JavaScript program that converts the string "hello world" to uppercase and the string "SELENIUM" to lowercase using built-in string methods. Print both results to the console.
let changeuppercase = "hello world";
let changelowercase = "SELENIUM";
console.log(changeuppercase.toUpperCase());
console.log(changelowercase.toLowerCase());

//Q3: Write a JavaScript program that declares two strings "Manual" and "Testing", concatenates them with a space in between using the concat() method, and prints the result to the console.
let one = "Manual";
let two = "Testing";
console.log(one.concat(" ", two));

//Q4: Write a JavaScript program that creates a string "Playwright Automation" and checks whether it contains the word "Auto" using the includes() method. Print the result to the console.
let checkword = "Playwright Automation";
console.log(checkword.includes("Auto"));

//Q5: Write a JavaScript program that creates a string "Automation Testing" and extracts the word "Testing" from it using the slice() method. Print the extracted word to the console.
let remove = "Automation Testing";
console.log(remove.slice(11));

//Q6: Write a JavaScript program that creates a string "Java Developer" and replaces the word "Java" with "Python" using the replace() method. Print the result to the console.
let changename = "Java Developer";
console.log(changename);
console.log(changename.replace("Java" , "Python"));

//Q7: Write a JavaScript program that creates a string "Selenium" and reverses it without using any built-in reverse method. Print the reversed string to the console.
let cre = "Selenium";
let reversed = "";

for (let i = cre.length - 1 ; i >= 0 ;  i--){ 
    reversed = reversed + cre[i];
}
console.log(reversed);

//Q8: Write a JavaScript program that creates a string "Automation Testing" and counts the total number of vowels in it using a for loop. Print the result to the console.
let vow = "Automation Testing";
let count = 0;

for (let i = 0; i< vow.length; i ++){
    if ("aeiouAEIOU".includes(vow[i])){
        count++;        
    }
}
console.log("Total vowles:" , count);

//Q9: Write a JavaScript program that creates a string "madam" and checks whether it is a palindrome or not using a for loop. A string is a palindrome if it reads the same forwards and backwards. Print the result to the console.
let check = "madam";
let isPalindrom = true;

for(let i = 0; i <check.length /2 ; i++){
    if (check[i] !== check[check.length - 1 - i]){
        isPalindrom = false;
        break;
    }
}
if (isPalindrom){
    console.log(check + " is a palindrome");
}
else{
    console.log(check + " is not a palindrome");
}

//Q10: Write a JavaScript program that creates a string "aabbcddeff" and finds the first character that does not repeat in the string using a for loop. Print the result to the console.
let find = "aabbcddeff";
for (let i = 0; i <find.length ; i++){
        if (find.indexOf(find[i]) === find.lastIndexOf(find[i])){
            console.log(find[i]);
            break;
        }
}



