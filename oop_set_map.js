//Q1: Write a JavaScript program that creates a constructor function named Student with properties name and age. Create one object using the constructor and print it to the console.
function Student(name, age){
    this.name = name;
    this.age = age;
}
let S1 = new Student("Devanshi", 23);
console.log(S1);

//Q2: Write a JavaScript program that creates a constructor function named Student with properties name and age, and uses it to create 3 different student objects. Print all 3 objects to the console.
function Student1(name, age){
    this.name = name;
    this.age = age;
}
let s1 = new Student1("Sweety", 25);
let s2 = new Student1("Keyuri", 24);
let s3 = new Student1("Aish", 26)
console.log(s1);
console.log(s2);
console.log(s3);

// Q3: Write a JavaScript program that creates a constructor function named Student with properties name and age, and adds a method printDetails inside it to print the student details. Create an object and call the method.
function Student2(name , age){
    this.name = name;
    this.age = age;
    this.printdetails = function(){
        console.log("Name : " + this.name);
        console.log("Age : " + this.age);
    }
    }
var student = new Student2("Devanshii", 24);
student.printdetails();

//Q4: Write a JavaScript program that creates a class named Employee with properties name, age, and department, and a method displayDetails to print the employee details. Create an object and call the method.
class Employee {
    constructor(name , age , department){
        this.name = name;
        this.age = age;
        this.department = department;
    }
    displaydetails() {
        console.log("Name :" + this.name);
        console.log("Age :" + this.age);
        console.log("Department : " + this.department)
    }
}
var emp = new Employee("Devanshi" , 24, "IT");
emp.displaydetails();

//Q5: Write a JavaScript program that creates a class named Car with properties name and model, and a method showDetails to print the car name and model. Create an object and call the method.
class Car {
    constructor(name, model){
        this.name = name;
        this.model = model;
    }
        showDetails() {
            console.log("Name :" + this.name);
            console.log("Model : " + this.model);
        }        
    }
var car = new Car("i20" , 2020);
car.showDetails();

//Q6: Write a JavaScript program that creates a parent class named Person with properties name and age, and extends it into a child class named Teacher with an additional property subject. Create a Teacher object and print all properties to the console.
class Person {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
}
var TS = new Teacher("Dharmishtha" , 40, "Science");
console.log("Name :" + TS.name);
console.log("Age : " + TS.age);
console.log("Subject :" + TS.subject);

//Q7: Write a JavaScript program that creates a parent class Person with a method displayDetails, extends it into a child class Teacher, and accesses the parent class method from the Teacher object.
class Personn {
    displaydetails(){
        console.log("Check method Parent class to child class");
    }
}
class Teacherr extends Personn{
}
var T = new Teacherr();
T.displaydetails();

//Q8: Write a JavaScript program that creates a parent class Person with a constructor, extends it into a child class Teacher, and uses the super keyword to call the parent constructor. Print all details using a method.
class Person1 {
    constructor(name , model){
        this.name = name;
        this.model = model;
    }
    display (){
        console.log("Name : " + this.name);
        console.log("Age : " + this.model);
    }
}
class Teacher1 extends Person1 {
    constructor(name, age , subject){
        super(name,age);
        this.subject = subject;
    }
    
    displaydetails(){
        this.display();
        console.log("Subject : " + this.subject);
    }
}
var St = new Teacher1("Meera", 30, "Maths");
St.displaydetails();

//Q9: Write a JavaScript program that creates a class named Student with a private property #name using the # symbol, and a getter method to access the private property. Create an object and print the private property using the getter.
class student3 {
    #name ; 
    constructor(name){
        this.#name = name;
    }
    getName(){
        return this.#name;
    }
}
const studentt3 = new student3("Devanshi");
console.log(studentt3.getName());

//Q10: Write a JavaScript program that creates a class named Student with a private property #name, a getter method to read it, and a setter method to update it. Create an object, update the private property using the setter, and print the updated value using the getter.
class Studentt3{
    #name;
    constructor(name){
        this.#name = name;
    }
    getName(){
        return this.#name;
    }
    setName(name){
        this.#name = name;
    }
}
const S11 = new Studentt3("Devanshii");
S11.setName("Devuu");
console.log(S11.getName()); 

//Q11: Write a JavaScript program that creates a parent class named Animal with a method sound(), and extends it into a child class named Dog that overrides the sound() method with its own implementation. Create a Dog object and call the sound() method.
class Animal{
    sound(){
        console.log("Bhow bhow");
    }
}
class Dog extends Animal{
    sound(){
        console.log("Bhoww bhow...")
    }
}
const Dog1 = new Dog;
Dog1.sound();

//Q12: Write a JavaScript program that creates a parent class Animal with a method sound(), and extends it into two child classes Dog and Cat, each overriding the sound() method with their own implementation. Create objects of both classes and call the sound() method on each.
class Animal1{
    sound(){
        // console.log("soundd")
    }
}
class Dogg extends Animal1{
    sound(){
        console.log("Dog Bark bhoww bhoww....");
    }
}
class Cat extends Animal1{
    sound(){
        console.log("Cat sound meaw..meaw..")
    }
}
const Dogg1 = new Dogg;
Dogg1.sound();
const Cat1 = new Cat();
Cat1.sound();

//Q13: Write a JavaScript program that creates a class named School with a static variable name and a static method displayName. Print the static variable and call the static method.
class School {
    static name = "Jeevanbharti"

    static displayName(){
        console.log("JeevanBharti kumarbhavan");
    }
}
console.log(School.name);
School.displayName();

//Q14: Write a JavaScript program that creates a class named MathHelper with a static method add() that takes two numbers and returns their sum. Call the static method directly using the class name without creating any object.
class MathHelper{
    static add (a,b){
        return a + b;
    }
}
console.log(MathHelper.add(23,58));

//Q15: Write a JavaScript program that creates a constructor function named Student with properties name and age, and adds a method printDetails to it using prototype. Create an object and call the method.
function Student (name,age){
    this.name = name;
    this.age = age;
}
Student.prototype.printDetails = function(){
    console.log("Name is :" + this.name);
    console.log("Age is :" + this.age);
}
const ss1 = new Student("Dharmishtha", 35);
ss1.printDetails();

//Q16: Write a JavaScript program that creates a constructor function named Student with properties name and age, and adds two methods greet and printDetails to it using prototype. Create an object and call both methods.
function Student (name , age){
    this.name = name;
    this.age = age;
}
Student.prototype.greet= function(){
    console.log("Hello, My name is : " + this.name);
}
Student.prototype.printDetails = function(){
    console.log("Name : " + this.name + ", And my " + "Age is : " + this.age);
}
const ss2 = new Student("Keyuri", 25);
ss2.greet();
ss2.printDetails();

//Q17: Write a JavaScript program that creates two classes Circle and Rectangle, each with a method named area() that calculates and returns the area based on their own formula. Create objects of both classes and call the area() method on each.
class Circle{
    area(r){
        return 3.14*r*r;
    }
}
class Rectangle{
    area(length, width){
        return length * width;
    }
}
const circle = new Circle;
console.log(circle.area(23))
const rectangle = new Rectangle;
console.log(rectangle.area(25,25))

//Q18: Write a JavaScript program that creates a Set, adds values including duplicate values to it, and prints all unique values to the console.
function learnSet(){
let s = new Set();
s.add("BMW");
s.add("HONDA");
s.add("BMW");
s.add("HONDA");
for (let v of s){
    console.log("Value..." + v);
}
}
learnSet();

//Q19: Write a JavaScript program that creates a Set with testing tool names and uses a for...of loop to print all values to the console one by one.
function testingtool(){
    let t = new Set();
    t.add("selenium");
    t.add("Appium");
    t.add("Playwright");
    t.add("Cypress");
let i = 1;
for (let name of t){
    console.log(i + ". "+ name);
    i++;
}
}
testingtool();

//Q20: Write a JavaScript program that creates a Map, adds key-value pairs to it, and uses a for...of loop to print all keys and values to the console.
function learnMaps()
{
    let m = new Map()
    m.set("Name", "i20");
    m.set("Model", 2022);
    m.set("fuelType" , "Diesel");
for (let[key,value] of m)
{
    console.log(key + " : " + value);
}
}
learnMaps();
