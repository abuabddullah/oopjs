const Employee = require("./Employee");

const _tittle = Symbol("tittle");

class Stuff extends Employee {
  constructor(id, name, tittle) {
    super(id, name);
    this[_tittle] = tittle;
  }

  get tittle() {
    return this[_tittle];
  }

  set tittle(newTittle) {
    this[_tittle] = newTittle;
  }

  toString() {
    return `${super.toString()},
    tittle : ${this[_tittle]}
    `;
  }
}

module.exports= Stuff;
