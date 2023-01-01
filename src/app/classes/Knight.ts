import { Move } from "../interfaces/move";
import { Piece } from "./Piece";

export class Knight extends Piece {
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y)
  }
  override move(move: Move) {
    if (this.canMove(move)) {
      return this.PutPiece(move);
    } else {
      return false;
    }
  }
  override canMove(move: Move) {
    const { toX, toY, x, y, toSpot } = this.getParams(move)

    const twoSquareControl = (((toY == y + 2) || (toX == x + 2)) || ((toY == y - 2) || (toX == x - 2)))
    const oneSquareControl = (((toX == x + 1) || (toY == y + 1)) || ((toX == x - 1) || (toY == y - 1)))

    if (twoSquareControl && oneSquareControl) {
      if ((toSpot != null)) {
        return this.toSpotIsNull(toSpot)
      } else return true;
    } else return false;

  }
}
