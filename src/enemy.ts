import { Character } from "./character";

export class Enemy extends Character {
  //TODO: maxHp プロパティを追加する
  private maxHp:number;

  //TODO: maxHp プロパティの初期化
  constructor(name: string, hp: number, power: number) {
    super(name, hp, power);
    this.maxHp = hp;
  }

  //TODO: maxHp に対する現在の hp の割合を返す getHpRatio メソッドを追加する
  getHpRatio(): number {
    return this.hp / this.maxHp;
  }

  override attack(opponent: Character): void {
    if (this.getHpRatio() <= 0.3) {
      console.log(`${this.name}は必死に抵抗している!`)
      opponent.takeDamage(this.power);
    } else {
    console.log(`${this.name}は攻撃してきた!`)
    opponent.takeDamage(this.power * 2);
  }
  }
}