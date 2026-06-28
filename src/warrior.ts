import { Character } from "./character.ts";

export class Warrior extends Character {
  private weapon: string;
  private power: number;

  constructor(name: string, hp: number, weapon: string, power: number) {
    super(name, hp); // super() <- 継承元 (character) の constructor
    this.weapon = weapon;
    this.power = power;
  }

  override attack(opponent: Character) {
    console.log(`${this.name}は${this.weapon}で攻撃した！`);
    //TO DO:opponentのhpを減らす
    opponent.takeDamage(this.power);
  }
}
