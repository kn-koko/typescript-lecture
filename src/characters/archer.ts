import { Character } from "./character";

export class Archer extends Character {
  private arrows: number;

  constructor(name: string, hp: number, arrows: number) {
    super(name, hp);
    this.arrows = arrows;
  };

  attack(opponent: Character) {
    if (this.arrows <= 0) {
      console.log(`${this.name} は矢がない!`);
      return;
    }
    this.arrows--;
    opponent.takeDamage(10);
    console.log(`${this.name} は矢を放った!`);
  }
}
