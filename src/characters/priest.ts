import { Character } from "./character.ts";
import type { Healable } from "./healable.ts";

export class Priest extends Character implements Healable {
  attack() {
    console.log(`${this.name}は攻撃できない`);
  }

  heal(target: Character) {
    target.takeHeal(10);
  }
}
