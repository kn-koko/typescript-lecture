import { Enemy } from "./characters/enemy";
import { Warrior } from "./characters/warrior";

const slime = new Enemy("スライム", 50);
const arther = new Warrior("アーサー", 100, "エクスカリバー");

while (true) {
  slime.attack(arther);
  arther.showStatus();

  if (arther.isDead()) {
    console.log(`${arther.getName()}は倒れた...`);
    break;
  }

  arther.attack(slime);
  slime.showStatus();

  if (slime.isDead()) {
    console.log(`${slime.getName()}を倒した！`);
    break;
  }
}
