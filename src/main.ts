//import { Mage } from "./mage";
import { Warrior } from "./warrior";
import { Enemy } from "./enemy";
//import { Archer } from "./archer";
import { battle } from "./battle";

// const character = new Character("太郎", 200); // abstract class はインスタンス化出来ないのでエラーが出る

const slime = new Enemy("スライム", 100, 10);
slime.showStatus();
slime.takeDamage(0);
slime.showStatus();

const warrior = new Warrior("アーサー", 100, "エクスカリバー", 30);
//const mage = new Mage("メディア", 80, 40);
//const archer = new Archer("エミヤ", 60, 10, 20);

//const party = [warrior, mage, archer];

battle(warrior, slime);

//for (const member of party) {
//member.showStatus();
//member.attack(slime);
//}

//slime.attack(party[0]);
