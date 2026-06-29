import { Character } from './character.ts';

export class Warrior extends Character {
  private weapon: string;

  constructor(name: string, hp: number, power: number, weapon: string) {
    super(name, hp, power); // super() <- 継承元 (character) の constructor
    this.weapon = weapon;
  };

  override attack(opponent: Character) {
    opponent.takeDamage(this.power);
    console.log(`${this.name}は${this.weapon}で攻撃した！`);
  };
}
