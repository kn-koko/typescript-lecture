import { Character } from "./character";

export class Enemy extends Character {
  //TODO: maxHp プロパティを追加する

  protected maxHp: number;
  private power: number;

  //TODO: maxHp プロパティの初期化
  constructor(name: string, hp: number, maxHp: number, power: number) {
    super(name, hp);
    this.maxHp = maxHp;
    this.power = power;
  }

  //TODO: maxHp に対する現在の hp の割合を返す getHpRatio メソッドを追加する
  getHpRatio(): number {
    const ratio: number = (this.hp / this.maxHp) * 100;
    return ratio;
  }

  //TODO: 残り HP が 30% 以下の場合、行動を変化させる
  // 通常時 : name + "は攻撃してきた！"
  // 残り HP が 30% 以下 : name + "は必死に抵抗している！"
  attack(opponent: Character): void {
    if (this.getHpRatio() <= 30) {
      console.log(`${this.name}は必死に抵抗している！`);
    } else {
      console.log(`${this.name}は攻撃してきた!`);
      //TO DO:opponentのhpを減らす
      opponent.takeDamage(this.power);
    }
  }
}
