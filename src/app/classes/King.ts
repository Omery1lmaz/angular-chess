import { Move } from "../interfaces/move";
import { Piece } from "./Piece";

export class King extends Piece {
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y);
  }

  override move(move: Move) {
    if (this.canMove(move)) {
      return this.PutPiece(move);
    } else { return false; }
  }
  override canMove(move: Move) {
    const { toX, toY, toSpot } = this.getParams(move)
    const xControl = ((toX == this.x + 1) || (toX == this.x - 1))
    const yControl = ((toY == this.y + 1) || (toY == this.y - 1))
    const xCross = (toX == this.x) && ((toY == this.y + 1) || (toY == this.y - 1))
    const yCross = ((toY == this.y) && ((toX == this.x - 1) || (toX == this.x + 1)))
    /*
    - motion control on the x-axis
    - motion control on the y-axis
    - motion control in cross y-axis
    - motion control in cross x-axis
    */

    if (xControl && yControl || (xCross || yCross)) {
      return this.toSpotIsNull(toSpot)
    } else {
      return false;
    }
  }
}
