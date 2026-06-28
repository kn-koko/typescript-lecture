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

  abstract attack(opponent: Character): void;
  //敵（opponent）

  //TODO: ダメージを受ける takeDamage メソッドを追加する
  takeDamage(damage: number): void {
    this.hp -= damage;
  }

  isDead(): boolean {
    if (this.hp <= 0) {
      return true;
    } else {
      return false;
    }
  }
}
