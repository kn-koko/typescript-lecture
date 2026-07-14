// src/characters/holy-priest.ts
import { Character } from "./character.ts";
import type { Healable } from "./healable.ts";
import type { Reviveable } from "./reviveable.ts";

// extends, implements を正しく設定する
export class HolyPriest extends Character implements Reviveable,Healable {
  constructor(name: string, hp: number, power: number) {
    super(name, hp, power);
}

    attack() {
    console.log(`${this.name}は攻撃することができない!`);
}

  heal(target: Character) {
    if(!target.isDead()) {
    target.takeHeal(15);
    console.log(`${this.name}は${target.getName()}を回復した`);
    } else{
      console.log(`${target.getName()}は倒れているため回復できない`);
    }
  }

  revive(target: Character) {
    if(target.isDead()) {
        target.takeHeal(50);
        console.log(`${this.name}は${target.getName()}を復活させた`);
    } else {
        console.log(`${target.getName()}はまだ倒れていない`);
    }
  }
}