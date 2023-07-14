/* private props for Person */
const _id = Symbol("id");
const _name = Symbol("name");
const _blood = Symbol("blood");
const _contact = Symbol("contact");

class Person {
  constructor(id, name) {
    this[_id] = id;
    this[_name] = name;
    this[_blood] = null;
    this[_contact] = null;
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

  get blood() {
    return this[_blood];
  }

  set blood(newBlood) {
    this[_blood] = newBlood;
  }

  get contact() {
    return this[_contact];
  }
  set contact(newContact) {
    this[_contact] = newContact;
  }

  toString() {
    return`${this[_id]} - ${this[_name]}`;
  }
}

module.exports = Person;
