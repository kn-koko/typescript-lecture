import type { Character } from "./character";

export interface Reviveable {
  revive(target: Character): void;
}
