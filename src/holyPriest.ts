import { Character } from "./character.ts";
import type { Healable } from "./healable.ts";
import type { Reviveable } from "./reviveable.ts";

//「HolyPriest は Character を継承し、Healable と Reviveable の約束を守るクラスです。」
export class HolyPriest extends Character implements Healable, Reviveable {
  constructor(name: string, hp: number, power: number) {
    super(name, hp, power);
  }

  override attack(opponent: Character) {
    console.log(`${this.name}は攻撃できない`);
  }
}
