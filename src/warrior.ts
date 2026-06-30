import { Character } from './character.ts';

export class Warrior extends Character {
  private weapon: string;

  constructor(name: string, hp: number, weapon: string) {
    super(name, hp); // super() <- 継承元 (character) の constructor
    this.weapon = weapon;
  };

  override attack(opponent: Character) { //誰を攻撃するか
    console.log(`${this.name}は${this.weapon}で攻撃した！`);
  //opponentのhpを減らす
  opponent.takeDamage(10);
  };
}
