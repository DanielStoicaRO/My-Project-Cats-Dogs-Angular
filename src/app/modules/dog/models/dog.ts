export class Dog {
  name: string;
  age: number;
  race: string;

  constructor(name: string = "", age: number = 0, race: string = "") {
    this.name = name;
    this.age = age;
    this.race = race;
  }
}
