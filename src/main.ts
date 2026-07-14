import { Mage } from "./mage";
import { Warrior } from "./warrior";
import { Enemy } from "./enemy";
import { Archer } from "./archer";
import { battle } from "./functions";
import { HolyPriest } from "./holy-priest";

const warrior = new Warrior("アーサー", 100,20, "エクスカリバー");
warrior.showStatus();

const mage = new Mage("メディア", 80,25);
mage.showStatus();

const slime = new Enemy("スライム", 50,10);
slime.showStatus();

const archer =  new Archer("那須与一", 70, 15, 3);
archer.showStatus();

const holyPriest = new HolyPriest("ホーリー", 60, 5);
holyPriest.showStatus();

battle(archer, slime);
battle(mage, warrior);
holyPriest.revive(archer);
archer.showStatus();
holyPriest.revive(mage);
mage.showStatus();
