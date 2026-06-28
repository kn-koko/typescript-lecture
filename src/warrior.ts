import { Character } from "./character.ts";

export class Warrior extends Character {
  private weapon: string;

  constructor(name: string, hp: number, weapon: string, power: number) {
    super(name, hp, power); // super() <- 継承元 (character) の constructor
    this.weapon = weapon;
    this.power = power;
  }

  override attack(opponent: Character) {
    console.log(`${this.name}は${this.weapon}で攻撃した！`);
    //TODO:opponentのhpを減らす
    opponent.takeDamage(this.power);
  }
}
