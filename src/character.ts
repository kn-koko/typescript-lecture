export class Character {
  name: string;
  hp: number;
  maxHp: number;

  constructor(name: string, hp: number) {
    this.name = name;
    this.hp = hp;
    this.maxHp = hp;
  }

  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }
}
