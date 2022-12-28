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
      console.log("Knight Move methodu çaliştirilamadi");
      return false;
    }
  }
  override canMove(move: Move) {
    const { board, toX, toY, piece, x, y, toBoard } = this.getParams(move)

    // console.log("Knight Move x y", x, y);
    // console.log('TOX TOY ', toX, toY);

    /**************************************************** */
    // const deneme1 =  ((toY == y + 1) || (toY == y - 1))
    // const deneme2 = ((toX == x + 2) || (toX == x - 2))
    // const deneme3  = ((toX == x + 1) || (toX == x - 1))
    // const deneme4 = ((toY == y + 2) || (toY == y - 2))

    const deneme = (((toY == y + 2) || (toX == x + 2)) || ((toY == y - 2) || (toX == x - 2)))
    const deneme1 = (((toX == x + 1) || (toY == y + 1)) || ((toX == x - 1) || (toY == y - 1)))
    if (deneme && deneme1) {
      console.log("Doğru yön");
      if ((toBoard != null)) {
        // renkler aynı değilse
        if (toBoard.white != this.white) {
          console.log("Aynı reknk değiller");
          return true
        } else return false;
      } else return true;
    } else return false;

  }
}
