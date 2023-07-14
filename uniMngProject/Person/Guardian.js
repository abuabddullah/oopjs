const Person = require("./Person");

/* private props for Gurdian */
const _profession = Symbol("profession");
const _income = Symbol("income");

class Guardian extends Person {
  constructor(id, name, profession, income) {
    super(id, name);
    this[_profession] = profession;
    this[_income] = income;
  }

  get income() {
    return this[_income];
  }

  set income(newIncome) {
    this[_income] = newIncome;
  }

  get profession() {
    return this[_profession];
  }

  set profession(newProfession) {
    this[_profession] = newProfession;
  }

  toString() {
    return `${super.toString()},
    profession : ${this[_profession]}
    income : ${this[_income]}`;
  }
}

module.exports = Guardian;
