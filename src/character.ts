export abstract class Character {
  protected name: string; // インスタンスからはアクセス出来ないが、継承先からはアクセスできる
  protected hp: number; // インスタンスからも継承先からもアクセス出来ない
  protected power: number;

  constructor(name: string, hp: number, power: number) {
    this.name = name;
    this.hp = hp;
    this.power = power;
  }

  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }

  getName(): string {
    return this.name;
  }

  abstract attack(opponent: Character): void;

  //TODO: ダメージを受ける takeDamage メソッドを追加する
  takeDamage(damage: number): void {
    this.hp = this.hp - damage;
  }

  isDead(): boolean {
    return this.hp <= 0;
  }
}
