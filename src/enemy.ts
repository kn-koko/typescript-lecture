import { Character } from "./character";

export class Enemy extends Character {
  constructor(name: string, hp: number, power: number) {
    super(name, hp, power);
    this.power = power;
  }

  //TODO: maxHp に対する現在の hp の割合を返す getHpRatio メソッドを追加する
  getHpRatio(): number {
    return this.hp / this.maxHp;
  }

  //TODO: 残り HP が 30% 以下の場合、行動を変化させる
  // 通常時 : name + "は攻撃してきた！"
  // 残り HP が 30% 以下 : name + "は必死に抵抗している！"
  override attack(opponent: Character): void {
    if (this.getHpRatio() <= 0.3) {
      console.log(`${this.name}は必死に抵抗している!`);
      opponent.takeDamage(this.power * 3);
    } else {
      console.log(`${this.name}は攻撃してきた!`);
      opponent.takeDamage(this.power);
    }
  }
}
