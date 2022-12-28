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
    const { board, toX, toY, piece, x, y, toBoard } = this.getParams(move)
    const deneme = ((toX == this.x + 1) || (toX == this.x - 1))
    const deneme1 = ((toY == this.y + 1) || (toY == this.y - 1))
    const deneme2 = (toX == this.x) && ((toY == this.y + 1) || (toY == this.y - 1))
    const deneme3 = ((toY == this.y) && ((toX == this.x - 1) || (toX == this.x + 1)))
    /*
    - X yönünde hareket konrolü
    - y yönünde hareket kontrolü
    - çapraz y yönünde hareket kontolü
    - çapraz x yönünde hareket kontrolü
    */
    if (deneme && deneme1 || (deneme2 || deneme3)) {
      if (this.white == toBoard?.white) {
        console.log("Karşı taraf farklı ");
        return false;
      } else return true;
      // return true
    } else {
      return false;
    }
  }
}
