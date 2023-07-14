const Uniperson = require("./UniPerson");

const _employeeID = Symbol("employeeID");
const _salary = Symbol("salary");

class Employee extends Uniperson {
  constructor(id, name, employeeID) {
    super(id, name);
    this[_employeeID] = employeeID;
    this[_salary] = null;
  }

  get employeeID() {
    return this[_employeeID];
  }

  get salary() {
    return this[_salary];
  }

  set salary(newSalary) {
    this[_salary] = newSalary;
  }

  toString() {
    return `${super.toString()},
    employeeID : ${this[_employeeID]}
    salary : ${this[_salary]}`;
  }
}

module.exports = Employee;
