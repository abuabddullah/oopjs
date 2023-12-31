const Uniperson = require("./UniPerson");

const _studentID = Symbol("studentID");
const _gurdian = Symbol("gurdian");
const _exams = Symbol("exams");
const _fee = Symbol("fee");

class Student extends Uniperson {
  constructor(id, name, studentID, gurdian) {
    super(id, name);
    this[_studentID] = studentID;
    this[_gurdian] = gurdian;
    this[_exams] = [];
    this[_fee] = null;
  }

  get studentID() {
    return this[_studentID];
  }

  get gurdian() {
    return this[_gurdian];
  }

  get exams() {
    return this[_exams];
  }

  set exams(newExams) {
    this[_exams] = newExams;
  }

  addExam(exam) {
    this[_exams].push(exam);
  }

  get fee() {
    return this[_fee];
  }

  set fee(newFee) {
    this[_fee] = newFee;
  }

  toString() {
    return `${super.toString()},
    studentID : ${this[_studentID]}`;
  }
}

module.exports = Student;
