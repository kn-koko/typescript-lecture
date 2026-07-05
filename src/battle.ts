import { Character } from "./character";

//character1や2は宣言しなくていい
export function battle(character1: Character, character2: Character): void {
  while (!character1.isDead() && !character2.isDead()) {
    // 戦闘
    //warriorが倒れていないかつ、スライムも倒れていない場合
    character1.attack(character2);
    if (character2.isDead()) {
      console.log(`${character2.getName()}は倒れた`);
      break;
    }
    character2.attack(character1);

    if (character1.isDead()) {
      console.log(`${character1.getName()}は倒れた`);
      break;
    }
  }
}
