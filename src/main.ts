import type { Character } from "./characters/character";
import { Enemy } from "./characters/enemy";
import { Mage } from "./characters/mage";
import { Warrior } from "./characters/warrior";
import { Priest } from "./characters/priest";

const enemy = new Enemy("ドラゴン", 200);
const warrior = new Warrior("アーサー", 100, "エクスカリバー");
const magician = new Mage("メディア", 80);

// 回復役は「Healable（回復できる者）」という契約の型で受け取る
// ※後衛なので敵からは攻撃されないことにする（発展でパーティ入りさせてOK）
const healer = new Priest("アリス", 100);

// 味方パーティを「共通の型」の配列でまとめる
const party: Character[] = [warrior, magician];
let battleOver = false;

while (true) {
  // TODO 1: 味方の攻撃 — for...of で party を回し、
  //         生存している (isDead() でない) 味方だけが enemy を攻撃する
  //         (warrior がドラゴンに攻撃 -> magician がドラゴンに攻撃)
  for (const member of party) {
    if (!member.isDead()) {
      member.attack(enemy);

      // TODO 2: 敵が倒れていたら「ドラゴンを倒した！」と表示して終了
      if (enemy.isDead()) {
        battleOver = true;
        console.log(`${enemy.getName()}を倒した!`);
        break;
      }
    }
  }

  if (battleOver) break;

  // TODO 3: 敵の反撃 — 生存している味方(最初の1人でOK)に attack
  //        (ドラゴンがwarrior (party 配列の最初の要素) に攻撃)
  const aliveParty = party.filter(m => !m.isDead());
  enemy.attack(aliveParty[0]);

  // TODO 4: 味方が全滅していたら「パーティは全滅した...」と表示して終了
  //         ヒント: party.every((m) => m.isDead())
  //                party 内の全ての要素について、 isDead() が true になる
  if (party.every((m) => m.isDead())) {
    console.log("パーティは全滅した...");
    break;
  }

  // 回復
  healer.heal(aliveParty[0]);
  console.log(`${healer.getName()}は${aliveParty[0].getName()}を回復した`)

  // TODO 5: 全員の showStatus()
  for (const member of party) {
    member.showStatus();
  }
  enemy.showStatus();
}
