export abstract class Character {
  protected name: string; // インスタンスからはアクセス出来ないが、継承先からはアクセスできる
  protected hp: number; // インスタンスからも継承先からもアクセス出来ない
  protected power: number;
  //TODO: maxHp プロパティを追加する
  protected maxHp: number;

  constructor(name: string, hp: number, power: number) {
    this.name = name;
    this.hp = hp;
    this.power = power;
    //TODO: maxHp プロパティの初期化
    this.maxHp = hp;
  }

  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }

  getName(): string {
    return this.name;
  }
  //他のところから、安全に name を取得できるようにするため

  //攻撃するために相手を引数に取る
  abstract attack(opponent: Character): void;

  //TODO: ダメージを受ける takeDamage メソッドを追加する
  takeDamage(damage: number): void {
    this.hp = this.hp - damage;
    //もしHPが0を下回った場合、0に固定する
    if (this.hp < 0) {
      this.hp = 0;
    }
  }

  isDead(): boolean {
    return this.hp <= 0;
  }

  takeHeal(heal: number): void {
    this.hp = this.hp + heal;
    if (this.hp > this.maxHp) {
      this.hp = this.maxHp;
    }
  }
}
