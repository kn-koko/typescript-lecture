import { Character } from "./character";

export class Archer extends Character {
  private arrows: number;
  private power: number;

  constructor(name: string, hp: number, arrows: number, power: number) {
    super(name, hp);
    this.arrows = arrows;
    this.power = power;
  }

  attack(opponent: Character) {
    if (this.arrows <= 0) {
      console.log(`${this.name} は矢がない!`);
      return;
    }
    this.arrows--;
    console.log(`${this.name} は矢を放った!`);
    //TO DO:opponentのhpを減らす
    opponent.takeDamage(this.power);
  }
}
