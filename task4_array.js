//Q1: Write a JavaScript program that creates an array of 5 student names and prints all names to the console using a for loop.
let students_name = ["Devanshi", "Sweety", "Keyuri", "Aishwarya", "Khushi"];
for (let i = 0; i<students_name.length; i++){
    console.log(students_name[i]);
}

//Q2: Write a JavaScript program that declares an array ["QA", "Dev", "Tester", "Manager"] and prints its length to the console using the length property.
let status = ["QA", "Dev", "Tester", "Manager"];
console.log(status.length);

//Q3. Write a JavaScript program that declares an array of job roles, adds "Automation Tester" at the end of the array using the push() tools, and prints the updated array to the console.
let roles = ["Manual Tester", "Developer", "Manager"];
roles.push("Automation Tester");
console.log(roles);

//Q4. Write a JavaScript program that declares an array of job roles, removes the last element from it using the pop() tools, and prints the updated array to the console.
let Roles = ['Manual Tester', 'Developer', 'Manager', 'Automation Tester'];
Roles.pop();
console.log(Roles);

//Q5. Write a JavaScript program that declares an array of job roles, adds "Manual Tester" at the beginning of the array using the unshift() tools, and prints the updated array to the console.
let roless = ['Developer', 'Manager', 'Automation Tester'];
roless.unshift("Manual tester");
console.log(roless);

//Q6. Write a JavaScript program that declares an array of testing tools, removes the first element from it using the shift() tools, and prints the updated array to the console.
let roles1 = [ 'Manual Tester', 'Developer', 'Manager', 'Automation Tester' ];
roles1.shift();
console.log(roles1);

//Q7. Write a JavaScript program that declares an array of testing tools and checks whether "Selenium" exists in the array using the includes() tools. Print the result to the console.
let tools = ["Selenium", "playwright", "Appium", "Postman", "Cypress"];
console.log(tools.includes("Selenium"));

//Q8. Write a JavaScript program that declares an array [40, 10, 100, 25] and sorts it in ascending order using the sort() method with a compare function. Print the sorted array to the console.
let similar = [40, 10, 100,25];
similar.sort((a,b)=> a - b);
console.log(similar);

//Q9. Write a JavaScript program that declares an array ["JS", "Java", "Python"] and reverses it using the reverse() method. Print the reversed array to the console.
let character = ["JS", "Java", "Python"];
character.reverse();
console.log(character);

//Q10. Write a JavaScript program that declares an array [5, 20, 15, 30, 10] and finds the maximum number from it using Math.max() and the spread operator. Print the result to the console.
console.log("Biggest number is : ");
let Max = [5, 20, 15, 30, 10];
result = Math.max(...Max);
console.log(result);
