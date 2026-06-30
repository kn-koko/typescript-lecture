export abstract class Character {
  protected name: string; // インスタンスからはアクセス出来ないが、継承先からはアクセスできる
  protected hp: number; // インスタンスからも継承先からもアクセス出来ない
  

  constructor(name: string, hp: number) {
    this.name = name;
    this.hp = hp;
  }

  takeDamage(damage: number): void {
    this.hp -= damage;
  }

  isDead(): boolean {
    return this.hp <= 0;
  }

  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }

  abstract attack(opponent: Character): void
}