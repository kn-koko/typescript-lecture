export abstract class Character {
  protected name: string; // インスタンスからはアクセス出来ないが、継承先からはアクセスできる
  protected hp: number;
  protected power: number;

  constructor(name: string, hp: number, power: number) {
    this.name = name;
    this.hp = hp;
    this.power = power;
  }

  getName():string{
    return this.name;
  }

  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }

    //TODO: ダメージを受ける takeDamage メソッドを追加する
  public takeDamage(damage: number): void {
    this.hp -= damage;
    if (this.hp  < 0) {
      this.hp = 0;
    }
  }

  isDead(): boolean {
    return this.hp <= 0;
  }

  abstract attack(opponent:Character): void
}
