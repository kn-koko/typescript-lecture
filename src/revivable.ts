import { Character } from "./character";
export interface Revivable {
  revive(target: Character): void;
}
