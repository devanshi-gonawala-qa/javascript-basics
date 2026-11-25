//Q1: Write a JavaScript program that creates an object named student with properties name, age, and course, and prints the entire object to the console.
let student ={
    name : "Devanshi",
    age : 20,
    course : "Full stack automation testing course",
}
// console.log("Student name is : " + student.name);
// console.log("Student Age is : " + student.age);
// console.log("Student's course name is : " + student.course);
console.log(student);

//Q2: Write a JavaScript program that creates a student object and accesses and prints the name and course properties separately using dot notation.
var Student = {
    name : "Sweety",
    course : "Full stack developer",
}
console.log(Student.name);
console.log(Student.course);

//Q3: Write a JavaScript program that creates a student object, adds a new property city to it using dot notation, and prints the updated object to the console.
var Student = {
    name : "Sweety",
    course : "Full stack developer",
}
Student.city = "Surat";
console.log(Student);

//Q4: Write a JavaScript program that creates a student object, updates the age property with a new value using dot notation, and prints the updated object to the console.
var Student = {
    name : "Devanshi Gonawala",
    age : 20,
    course : "Full stack automation testing course",
}
Student.age = 23;
console.log(Student);

//Q5: Write a JavaScript program that creates a student object, deletes the course property from it using the delete operator, and prints the updated object to the console.
var Student = {
    name : "Devanshi Gonawala",
    age : 20,
    course : "Full stack automation testing course",
}
delete Student.course;
console.log(Student);

//Q6: Write a JavaScript program that creates a student object and uses a for...in loop to print all keys and their corresponding values to the console.
var Student = {
    name : "Devanshi Gonawala",
    age : 20,
    course : "Full stack automation testing course",
};
for (var key in Student){
    console.log(key + ": " + Student[key]);
};

//Q7: Write a JavaScript program that creates an array of 3 student objects, each having properties name, age, and course, and prints the name of each student to the console using a for loop.
var Student = [{Name:"Devanshi", Age : 23 , Course: "Automation testing"}, 
    {Name: "Sweety", Age: 25, Course : "Full stack developer"},
    {Name :"Keyuri", Age: 24, Course: "Fashion designer"}];
for (var i = 0 ; i < Student.length ; i++){
    console.log(Student[i].Name)
}

// Q8: Write a JavaScript program that creates a student object and converts it into a JSON string using JSON.stringify(). Print the JSON string to the console.
var Student = {
    Name : "Devanshi",
    Age : 20,
    course : "Automation full stack testing course",
};
var jsonString = JSON.stringify(Student);
console.log(jsonString);

//Q9: Write a JavaScript program that declares a JSON string and converts it into a JavaScript object using JSON.parse(). Access and print the name property from the converted object.
const carJSON = '{"Color" : "Blue", "Age" : 10, "FuelType" : "Petrol"}';
console.log(carJSON.Color);
let car = JSON.parse(carJSON);
console.log(car.Color);
console.log(car.Age);
console.log(car.FuelType);

//Q10. Write a JavaScript program that creates an array of student objects and finds all students whose age is greater than 20 using the filter() method. Print the result to the console.
var Student = [{Name : "Devanshi", Age: 20, Course: "Automation testing"},
    {Name: "Sweety", Age: 21, Course: "Full stack developer"}, 
    {Name : "Keyuri", Age: 24, Course: "Fashio designer"}];
var result = Student.filter(function(s){
    return s.Age > 20
});
console.log(result);

