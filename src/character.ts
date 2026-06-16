export class Character {
  protected name: string; // インスタンスからはアクセス出来ないが、継承先からはアクセスできる
  private hp: number; // インスタンスからも継承先からもアクセス出来ない

  constructor(name: string, hp: number) {
    this.name = name;
    this.hp = hp;
  }

  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }
}
