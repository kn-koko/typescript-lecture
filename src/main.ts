import { Mage } from "./mage";
import { Warrior } from "./warrior";
import { Enemy } from "./enemy";
import { Archer } from "./archer";
import { battle } from "./battle";

// const character = new Character("太郎", 200); // abstract class はインスタンス化出来ないのでエラーが出る

const slime = new Enemy("スライム", 100, 10);
slime.showStatus();
slime.takeDamage(0);

const warrior = new Warrior("アーサー", 100, "エクスカリバー", 35);
warrior.showStatus();
const mage = new Mage("メディア", 80, 40);
mage.showStatus();
const archer = new Archer("エミヤ", 130, 3, 30);
archer.showStatus();

//const party = [warrior, mage, archer];

battle(archer, warrior);
battle(mage, slime);

//for (const member of party) {
//member.showStatus();
//member.attack(slime);
//}

//slime.attack(party[0]);
