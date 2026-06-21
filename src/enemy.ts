import { Character } from "./character";

export class Enemy extends Character {
  //TODO: maxHp プロパティを追加する

  //TODO: maxHp プロパティの初期化
  constructor(name: string, hp: number) {
    super(name, hp);
  }

  //TODO: maxHp に対する現在の hp の割合を返す getHpRatio メソッドを追加する
  getHpRatio(): number {}

  //TODO: ダメージを受ける takeDamage メソッドを追加する
  takeDamage(damage: number): void {}

  //TODO: 残り HP が 30% 以下の場合、行動を変化させる
  // 通常時 : name + "は攻撃してきた！"
  // 残り HP が 30% 以下 : name + "は必死に抵抗している！"
  attack(): void {}
}
