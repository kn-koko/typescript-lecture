import { Character } from "./character.ts";
import type { Healable } from "./healable.ts";
import type { Revivable } from "./revivable.ts";

//「HolyPriest は Character を継承し、Healable と Revivable の約束を守るクラスです。」
export class HolyPriest extends Character implements Healable, Revivable {
  constructor(name: string, hp: number, power: number) {
    super(name, hp, power);
  }

  override attack(opponent: Character) {
    console.log(`${this.name}は攻撃できない`);
  }

  heal(target: Character) {
    console.log(`${this.name}は回復魔法を唱えた`);
    target.takeHeal(15);
  }

  revive(target: Character) {
    if (target.isDead()) {
      console.log(`${this.name}は蘇生魔法を唱えた`);
      target.takeHeal(50);
      console.log(`${target.getName()}は蘇生した`);
    } else {
      console.log(`${target.getName()}はまだ倒れていない`);
    }
  }
}
