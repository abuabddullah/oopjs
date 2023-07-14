const _id = Symbol("id");
const _roadNo = Symbol("roadNo");
const _city = Symbol("city");
const _region = Symbol("region");
const _country = Symbol("country");
const _postalCode = Symbol("postalCode");

class Address {
  constructor({ id, roadNo, city, region, country, postalCode }) {
    this[_id] = id;
    this[_roadNo] = roadNo || "";
    this[_city] = city || "";
    this[_region] = region || "";
    this[_country] = country || "";
    this[_postalCode] = postalCode || "";
  }

  get id() {
    return this[_id];
  }

  get _roadNo() {
    return this[_roadNo];
  }

  set _roadNo(newRoadNo) {
    this[_roadNo] = newRoadNo;
  }

  get _city() {
    return this[_city];
  }

  set _city(newcity) {
    this[_city] = newcity;
  }

  get _region() {
    return this[_region];
  }

  set _region(newregion) {
    this[_region] = newregion;
  }

  get _country() {
    return this[_country];
  }

  set _country(newcountry) {
    this[_country] = newcountry;
  }

  get _postalCode() {
    return this[_postalCode];
  }

  set _postalCode(newpostalCode) {
    this[_postalCode] = newpostalCode;
  }

  toString() {
    return `
    id : ${this[_id]},
    roadNo : ${this[_roadNo]},
    city : ${this[_city]},
    region : ${this[_region]},
    country : ${this[_country]},
    postalCode : ${this[_postalCode]},
    `;
  }
}


module.exports = Address;