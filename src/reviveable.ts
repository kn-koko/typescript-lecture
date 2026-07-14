// src/characters/reviveable.ts
import type { Character } from "./character.ts";

export interface Reviveable extends Character{
  // インターフェースを定義する
  revive(opponent:Character):void
}