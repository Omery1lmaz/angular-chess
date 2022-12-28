import { Board } from "../classes/Board";
import { Piece } from "../classes/Piece";

export interface Move {
  pice?: any,
  board: any,
  toX: number,
  toY: number
}
