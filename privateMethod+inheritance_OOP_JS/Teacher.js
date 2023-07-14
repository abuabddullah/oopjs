const _salary = Symbol("salary")
const _subject = Symbol("subject")

const Person = require("./Person");

class Teacher extends Person {
  constructor(name, email, subject, salary) {
    super(name, email);
    this[_salary] = salary;
    this[_subject] = subject;
  }

  get salary() {
    return this[_salary];
  }

  get subject() {
    return this[_subject];
  }

  myInfo() {
    console.log(
      "=== printing Person-Class's myInfo() by super.myInfo() in Teacher-Class ==="
    );

    super.myInfo();

    console.log(
      "=== polymorphism: orverriding Person-Class's myInfo() in Teacher-Class's myInfo() ==="
    );

    console.log(`subject : ${this[_subject]}; salary: ${this[_salary]}`);
  }
}

module.exports = Teacher;
