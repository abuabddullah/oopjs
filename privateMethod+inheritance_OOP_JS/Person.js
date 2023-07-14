const _name = Symbol("name");
const _email = Symbol("email");
class Person {
  static classID = 1;
  static className = "Person";
  static isValidStaticMethod(userAge) {
    return userAge >= 10;
  }
  static isAvailableUsername_StaticMethod(p1, p2) {
    if (p1.name == p2.name) return false;
    if (p1.email == p2.email) return false;
    return true;
  }
  constructor(name, email) {
    this[_name] = name;
    this[_email] = email;
  }

  get email() {
    return this[_email];
  }

  set email(newEmail) {
    this[_email] = newEmail;
  }

  get name() {
    return this[_name];
  }

  set name(newName) {
    this[_name] = newName;
  }

  myInfo() {
    console.log(`name : ${this[_name]}; email: ${this[_email]}`);
  }
}

module.exports = Person;
