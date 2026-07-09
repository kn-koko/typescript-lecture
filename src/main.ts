import { Magician } from "./characters/magician";
import { Priest } from "./characters/priest";

const alice = new Priest("Alice", 100);
const bob = new Magician("Bob", 80);

alice.heal(bob);
bob.heal(alice);
