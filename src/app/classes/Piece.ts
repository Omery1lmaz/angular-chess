import { Board } from "./Board";

export abstract class Piece {
  name!: string;
  white: boolean = false;
  ismoved?= false;
  x!: number;
  y!: number;
  constructor(white: boolean, name: string, y: number, x: number) {
    this.name = name;
    this.white = white;
    this.x = x;
    this.y = y;
  }
  move(board: Board, start: number, end: number, toX: number, toY: number) { }
  canMove(board: Board, start: number, end: number, toX: number, toY: number) { }
  getPossibleMoves(board: Board, start: number, end: number, toX: number, toY: number) { }
  isAvailable(toX: number, toY: number) {
    if (toX == this.x && toY == this.y) { return false; }
    return true;
  }
}

