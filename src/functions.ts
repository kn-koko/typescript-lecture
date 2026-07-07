import { Character } from "./character";

export function battle(opponent1: Character, opponent2: Character) {
  while (opponent1.isDead() === false && opponent2.isDead() === false) {
    opponent1.attack(opponent2);
    opponent2.showStatus();
    if(opponent1.isDead() === false && opponent2.isDead() === false){
      opponent2.attack(opponent1);
      opponent1.showStatus();
    }
  }

  if (opponent1.isDead()) {
    console.log(`${opponent1.getName()}は倒れた！`)
  } else {
    console.log(`${opponent2.getName()}は倒れた！`)
  }
}

// export const PI = 3.14159;

// export function add(a: number, b: number): number {
//   return a + b;
// }

// export default function multiply(a: number, b: number): number {
//   return a * b;
// }
