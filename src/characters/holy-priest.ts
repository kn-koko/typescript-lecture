// src/characters/holy-priest.ts
import { Character } from "./character.ts";
import type { Healable } from "./healable.ts";
import type { Reviveable } from "./reviveable.ts";

// extends, implements を正しく設定する
export class HolyPriest extends Character implements Healable, Reviveable {
  attack() {
    console.log("攻撃できない");
  }

  heal(target: Character) {
    if (!target.isDead()) {
      target.takeHeal(15);
    } else {
      console.log(`${target.getName()}は死んでいるので回復できない`);
    }
  }

  revive(target: Character) {
    if (target.isDead()) {
      target.takeHeal(50);
    } else {
      console.log(`${target.getName()}は生きているので蘇生できない`);
    }
  }
}
