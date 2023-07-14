const _id = Symbol("id");
const _name = Symbol("name");
const _passMark = Symbol("passMark");
const _subject = Symbol("subject");

class Exam {
  constructor({ id, name, passMark,subject }) {
    this[_id] = id;
    this[_name] = name;
    this[_passMark] = passMark || 33;
    this[_subject] = subject;
  }

  get id() {
    return this[_id];
  }

  get name() {
    return this[_name];
  }

  set name(newName) {
    this[_name] = newName;
  }

  get passMark() {
    return this[_passMark];
  }

  set passMark(newpassMark) {
    this[_passMark] = newpassMark;
  }

  get subject() {
    return this[_subject];
  }

  set subject(newsubject) {
    this[_subject] = newsubject;
  }

  toString() {
    return `
    id : ${this[_id]},
    name : ${this[_name]},
    passMark : ${this[_passMark]},
    subject : ${this[_subject]},
    `;
  }
}

module.exports = Exam;
