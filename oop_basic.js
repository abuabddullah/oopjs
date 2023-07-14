/**
 * class
 * constructor
 * methods : functions in an class
 * private properties : যে properties গুলো কেবল class Person এর জন্যই accessible তার থেকে তৈরি instance এর জন্য নয়
 * private methods : যে functions গুলো কেবল class Person এর জন্যই accessible তার থেকে তৈরি instance এর জন্য নয়
 * getter
 * setter
 * instanceOf
 * static properties : যে properties গুলো আমাদের কে define করতে হয় কেবল মাত্র Person এর জন্য (id,className etc.) যা instance এর জন্য accessibleনয়
 * static methods : যে methods গুলো আমাদের কে কোন intance create করার আগে বা তার validity check করে নিতে দেয় ।
 */
const _pass = Symbol("pass");
class Person {
  static classID = 1;
  static className = "Person";
  static isValidStaticMethod(userAge) {
    return userAge >= 10;
  }
  static isAvailableUsername_StaticMethod(p1, p2) {
    if (p1 == p2) {
      return {
        success: false,
        msg: "already taken! Not available.",
      };
    }
    return {
      success: true,
      msg: "Username successfull",
    };
  }
  constructor(name, userName, email, age, pass) {
    this.name = name;
    this.userName = userName;
    this.email = email;
    this.age = age;
    this[_pass] = pass;
  }

  get passGetter() {
    return this[_pass];
  }

  set passSetter(newPass) {
    this[_pass] = newPass;
  }

  notification(msg) {
    console.log("from : ", this.email);
    console.log(
      "message :",
      `${msg}. cause u borned in `,
      this._calcBirthYear4Notify_PrivateMethod()
    );
  }

  _calcBirthYear4Notify_PrivateMethod() {
    const birthYear = 2023 - this.age;
    return birthYear;
  }

  myInfo() {
    return this;
  }
}

const p1 = new Person("Matin Rahman", "MRtin", "email@mr.tin", 24, "123456789");

p1.passSetter = 987654321;
console.log(p1);
p1.notification("H B D");

const isInstance = p1 instanceof Person;
console.log("is p1 Instance of Person :", isInstance);

/* use of static properties */
console.log("className :", Person.className); // to know the className
console.log("classID :", Person.classID); // to know the id

/* use of static methods */
const user = {
  name: "Demo Test Ali",
  username: "demoAli",
  email: "demo@test.ali",
  age: 50,
  pass: "123456789",
};
let p2_useOfStaticMethod;
if (Person.isValidStaticMethod(user.age)) {
  p2_useOfStaticMethod = new Person(
    user.name,
    user.username,
    user.email,
    user.age,
    user.pass
  );
}
console.log(p2_useOfStaticMethod);

console.log(
  Person.isAvailableUsername_StaticMethod(p1.email, p2_useOfStaticMethod.email)
);
