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
    const { toX, toY, toBoard } = this.getParams(move)
    const xControl = ((toX == this.x + 1) || (toX == this.x - 1))
    const yControl = ((toY == this.y + 1) || (toY == this.y - 1))
    const xCross = (toX == this.x) && ((toY == this.y + 1) || (toY == this.y - 1))
    const yCross = ((toY == this.y) && ((toX == this.x - 1) || (toX == this.x + 1)))
    /*
    - X yönünde hareket konrolü
    - y yönünde hareket kontrolü
    - çapraz y yönünde hareket kontolü
    - çapraz x yönünde hareket kontrolü
    */

    if (xControl && yControl || (xCross || yCross)) {
      if (this.white == toBoard?.white) {
        return false;
      } else return true;
    } else {
      return false;
    }
  }
}
