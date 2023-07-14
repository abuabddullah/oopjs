const Person = require("./Person");
const Teacher = require("./Teacher");
const Student = require("./Student");

console.log(`=================
==== teacher ====
=================`)

const t = new Teacher("asif", "asif@i.ya", "CSE", 10000);
// t.myInfo();
console.log(t)


console.log(`=================
==== student ====
=================`)
const s = new Student("Samiya", "sam@i.ya", ["Biology", "CSE", "CFP"], 1000);
// s.myInfo();
console.log(s)
