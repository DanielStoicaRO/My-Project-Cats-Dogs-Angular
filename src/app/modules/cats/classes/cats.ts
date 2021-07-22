export class Cat {
  name: string;
  age: number;
  weight: number;
  race: string;
  color: string;


  constructor(name: string = "", age: number = 0, weight: number = 0, race: string = "", color: string = "") {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.race = race;
    this.color = color;
  }
}
