import { Piece } from "./Piece";

export class Spot {
  piece: Piece | null;
  x: number;
  y: number;
  constructor(piece: Piece | null, x: number, y: number) {
    this.piece = piece;
    this.x = x;
    this.y = y;
  }
}
