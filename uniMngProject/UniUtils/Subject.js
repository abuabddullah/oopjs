const _id = Symbol("id");
const _name = Symbol("name");
const _credit = Symbol("credit");

class Subject {
  constructor({ id, name, credit }) {
    this[_id] = id;
    this[_name] = name;
    this[_credit] = credit;
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

  get credit() {
    return this[_credit];
  }

  set credit(newcredit) {
    this[_credit] = newcredit;
  }

  toString() {
    return `
    id : ${this[_id]},
    name : ${this[_name]},
    credit : ${this[_credit]},
    `;
  }
}

module.exports = Subject;
