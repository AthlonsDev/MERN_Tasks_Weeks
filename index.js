
function EmployeeInfo(name, salary) {
    console.log("Welcome " + name + " Your monthly salary is " + salary)
}

const empSkills = (skills) => {
    return ("Expert in " + skills)
}

console.log("this sis my first program");

var empName = "John"
var empSalary = 50000

EmployeeInfo(empName, empSalary)
console.log(empSkills("java"))

const os = require("os")
const util = require("util")

console.log(os.uptime()/3600)
console.log(util.inspect(os.cpus()))


// constant called rectangle links to rectangle.js module - u1612023
const rectangle = require("./rectangle")
// Variable defining length and one that defines breadth
var length = 50;
var breadth = 80;

// prints perimeter function that is declared in rectagnle.js, inserting the two parameters required - u1612023
console.log(rectangle.perimeter(length, breadth))
// just like previously done form the perimeter function, it will now print the area function
// passing the two parameter needed - u1612023
console.log(rectangle.area(length, breadth))


