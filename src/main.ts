import { Mage } from "./mage";
import { Warrior } from "./warrior";
import { Enemy } from "./enemy";
// import { Archer } from "./archer";

// const character = new Character("太郎", 200); // abstract class はインスタンス化出来ないのでエラーが出る

const warrior = new Warrior("アーサー", 100,10, "エクスカリバー");
warrior.showStatus();

const mage = new Mage("メディア", 80,10);
mage.showStatus();

const slime = new Enemy("スライム", 50,10);
slime.showStatus();

