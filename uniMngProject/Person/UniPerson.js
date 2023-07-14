const Person = require("./Person");

/* private props for Uniperson */
const _department = Symbol("department");
const _account = Symbol("account");

class Uniperson extends Person {
  constructor(id, name) {
    super(id, name);
    this[_department] = null;
    this[_account] = null;
  }

  get account() {
    return this[_account];
  }

  set account(newAccount) {
    this[_account] = newAccount;
  }

  get department() {
    return this[_department];
  }

  set department(newDepartment) {
    this[_department] = newDepartment;
  }

  toString() {
    return `${super.toString()},
    Department : ${this[_department]}
    Account : ${this[_account]}`;
  }
}



module.exports = Uniperson;
