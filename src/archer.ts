import { Character } from "./character";

export class Archer extends Character {
  private arrows: number;

  constructor(name: string, hp: number, power: number, arrows: number) {
    super(name, hp, power);
    this.arrows = arrows;
  };

  override attack(opponent: Character) {
    if (this.arrows <= 0) {
      console.log(`${this.name} は矢がない!`);
      return;
    }
    this.arrows--;
    opponent.takeDamage(this.power);
    console.log(`${this.name} は矢を放った!`);
  }
}
