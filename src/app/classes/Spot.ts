import { Piece } from "./Piece";

export class Spot {
  piece: Piece | null;
  x: number;
  y: number;
  constructor(piece: Piece | null, y: number, x: number) {
    this.piece = piece;
    this.x = x;
    this.y = y;
  }
}
