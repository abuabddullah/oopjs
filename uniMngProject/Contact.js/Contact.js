const _id = Symbol("id");
const _email = Symbol("email");
const _phone = Symbol("phone");
const _altPhone = Symbol("altPhone");
const _address = Symbol("address");

class Contact {
  constructor({ id, email, phone, altPhone, address }) {
    this[_id] = id;
    this[_email] = email || "";
    this[_phone] = phone || "";
    this[_altPhone] = altPhone || "";
    this[_address] = address || null;
  }

  get id() {
    return this[_id];
  }

  get _email() {
    return this[_email];
  }

  set _email(newemail) {
    this[_email] = newemail;
  }

  get _phone() {
    return this[_phone];
  }

  set _phone(newphone) {
    this[_phone] = newphone;
  }

  get _altPhone() {
    return this[_altPhone];
  }

  set _altPhone(newaltPhone) {
    this[_altPhone] = newaltPhone;
  }

  get _address() {
    return this[_address];
  }

  set _address(newaddress) {
    this[_address] = newaddress;
  }

  toString() {
    return `
    id : ${this[_id]},
    email : ${this[_email]},
    phone : ${this[_phone]},
    altPhone : ${this[_altPhone]},
    address : ${this[_address]},
    `;
  }
}

module.exports = Contact;
