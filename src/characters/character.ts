export abstract class Character {
  protected name: string; // インスタンスからはアクセス出来ないが、継承先からはアクセスできる
  protected hp: number; // インスタンスからも継承先からもアクセス出来ない

  constructor(name: string, hp: number) {
    this.name = name;
    this.hp = hp;
  }

  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }

  // ダメージを受ける takeDamage メソッドを追加する
  takeDamage(damage: number): void {
    this.hp -= damage;
  }

  // HP が 0 以下かどうかを返す
  isDead(): boolean {
    return this.hp <= 0;
  }

  // 攻撃する相手を引数に取る
  abstract attack(opponent: Character): void
}
