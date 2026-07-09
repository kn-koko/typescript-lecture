import { Character } from "./character.ts";
import type { Healable } from "./healable.ts";

export class Magician extends Character implements Healable {
  attack(opponent: Character) {
    console.log(`${this.name}は魔法で攻撃した`);
    opponent.takeDamage(5);
  }

  heal(target: Character) {
    target.takeHeal(8);
  }
}
