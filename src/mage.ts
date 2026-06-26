import { Character } from './character.ts';

export class Mage extends Character {
  override attack() {
    console.log(`${this.name}は魔法を唱えた！`);
  }
}
