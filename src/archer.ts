import { Character } from "./character";

export class Archer extends Character {
  private arrows: number;

  constructor(name: string, hp: number, arrows: number, power: number) {
    super(name, hp, power);
    this.arrows = arrows;
  }

  attack(opponent: Character) {
    if (this.arrows <= 0) {
      console.log(`${this.name} は矢がない!`);
      return;
    }
    this.arrows = this.arrows - 1;
    console.log(
      `${this.name} は矢を放った! 残りの矢の本数は${this.arrows}本だ`,
    );

    opponent.takeDamage(this.power);
  }
}
