import { Character } from "./character.ts";

export class Mage extends Character {
  override attack(opponent: Character) {
    console.log(`${this.name}は魔法を唱えた！`);
    //TO DO:opponentのhpを減らす
    opponent.takeDamage(20);
  }
}
