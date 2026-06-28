import { Mage } from "./mage";
import { Warrior } from "./warrior";
import { Enemy } from "./enemy";
import { Archer } from "./archer";

// const character = new Character("太郎", 200); // abstract class はインスタンス化出来ないのでエラーが出る

const slime = new Enemy("スライム", 50, 10);
slime.showStatus();
slime.attack();
slime.takeDamage(40);
slime.showStatus();
slime.attack();

const mage = new Mage("メディア", 80, 40);
mage.showStatus();
mage.attack(slime);

const archer = new Archer("エミヤ", 60, 10, 20);
archer.showStatus();
archer.attack(slime);

const warrior = new Warrior("アーサー", 100, "エクスカリバー", 30);
warrior.showStatus();
warrior.attack(slime);
