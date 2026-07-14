import type { Character } from "./character.ts";

export interface Healable extends Character{
  // インターフェースを定義する
  heal(opponent:Character):void
}