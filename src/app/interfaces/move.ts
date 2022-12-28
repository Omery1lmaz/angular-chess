import { Board } from "../classes/Board";

export interface Move {
  pice?: any,
  board: any,
  toX: number,
  toY: number
}

export interface Move2 {
  pice?: any,
  board: any,
  toX: number,
  toY: number,
  x: number,
  y: number
}
export interface Piece {
  white: boolean;
  ismoved: boolean;
  name: string;
  x: number;
  y: number;
}
