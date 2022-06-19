export class Member {
    #_id!: string;
    #name!: string;
    #age!: number;
    #number_olympic_participation!: number;
    constructor() { }
  
    get _id() { return this.#_id; }
    get name() { return this.#name; }
    get age() { return this.#age; }
    get number_olympic_participation() {
      return this.#number_olympic_participation;
    }
  
    set name(name) { this.name = name; }
    set age(age) { this.age = age; }
    set number_olympic_participation(value) {
      this.number_olympic_participation = value;
    }
  }
  
  export class Team {
    #_id!: string;
    #name!: string;
    #country!: number;
    #creation_year!: number;
    #creation_month!: number;
    #creation_day!: number;
    #members!: [Member];
    constructor() { }
  
    get _id() { return this.#_id; }
    get name() { return this.#name; }
    get country() { return this.#country; }
    get creation_year() { return this.#creation_year; }
    get creation_month() { return this.#creation_month; }
    get creation_day() { return this.#creation_day; }
    get members() { return this.#members; }
  
    set name(value) { this.#name = value; }
    set country(value) { this.#country = value; }
    set creation_year(value) { this.#creation_year = value; }
    set creation_month(value) { this.#creation_month = value; }
    set creation_day(value) { this.#creation_day = value; }
    set members(value) { this.members = value }
  }