const Person = require("./Person");
const Guardian = require("./Guardian");
const Uniperson = require("./UniPerson");
const Student = require("./Student");
const Employee = require("./Employee");
const Teacher = require("./Teacher");
const Stuff = require("./Stuff");


const u = new Teacher("1","Aziz","123")
console.log(u.toString())

module.exports = {
  Person,
  Guardian,
  Uniperson,
  Student,
  Employee,
  Teacher,
  Stuff,
};


