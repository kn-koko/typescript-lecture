import { Enemy } from "./characters/enemy";
import { Warrior } from "./characters/warrior";

const slime = new Enemy("スライム", 50);
const arthur = new Warrior("アーサー", 100, "エクスカリバー");

while (true) {
  arthur.attack(slime);
  if (slime.isDead()) {
    console.log(`${slime.getName()}を倒した！`);
    break;
  }

  slime.attack(arthur);
  if (arthur.isDead()) {
    console.log(`${arthur.getName()}は倒れた...`);
    break;
  }

  arthur.showStatus();
  slime.showStatus();
}
