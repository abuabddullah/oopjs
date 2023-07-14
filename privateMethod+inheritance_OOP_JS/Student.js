const _fee = Symbol("fee")
const _subjects = Symbol("subjects")

const Person = require("./Person");

class Student extends Person {
  constructor(name, email, subjects, fee) {
    super(name, email);
    this[_fee] = fee;
    this[_subjects] = subjects;
  }

  get fee() {
    return this[_fee];
  }

  get subjects() {
    return this[_subjects];
  }

  myInfo() {
    console.log(
      "=== printing Person-Class's myInfo() by super.myInfo() in Student-Class ==="
    );

    super.myInfo();

    console.log(
      "=== polymorphism: orverriding Person-Class's myInfo() in Student-Class's myInfo() ==="
    );

    console.log(`subjects : ${this[_subjects]}; fee: ${this[_fee]}`);
  }
}

module.exports = Student;
