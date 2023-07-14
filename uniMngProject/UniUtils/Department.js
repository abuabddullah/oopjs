const _id = Symbol("id");
const _name = Symbol("name");
const _subjects = Symbol("subjects");
const _dean = Symbol("dean");
const _teachers = Symbol("teachers");

class Department {
  constructor({ id, name, subjects, dean, teachers }) {
    this[_id] = id;
    this[_name] = name;
    this[_subjects] = subjects || [];
    this[_dean] = dean || null;
    this[_teachers] = teachers || [];
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

  get subjects() {
    return this[_subjects];
  }

  set subjects(newsubjects) {
    this[_subjects] = newsubjects;
  }

  get dean() {
    return this[_dean];
  }

  set dean(newdean) {
    this[_dean] = newdean;
  }

  get teachers() {
    return this[_teachers];
  }

  set teachers(newteachers) {
    this[_teachers] = newteachers;
  }

  addTeacher(teacher) {
    this[_teachers].push(teacher);
  }

  toString() {
    return `
    id : ${this[_id]},
    name : ${this[_name]},
    `;
  }
}

module.exports = Department;
