const Employee = require("./Employee");

const _subject = Symbol("subject");

class Teacher extends Employee {
  constructor(id, name, subject) {
    super(id, name);
    this[_subject] = subject;
  }

  get subject() {
    return this[_subject];
  }

  set subject(newSub) {
    this[_subject] = newSub;
  }

  toString() {
    return `${super.toString()},
    subject : ${this[_subject]}
    `;
  }
}

module.exports= Teacher;
