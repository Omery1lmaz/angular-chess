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
    // console.log("Knight Move x y", this.x, this.y);
    // console.log('TOX TOY ', move.toX, move.toY);
    console.log((move.toX == this.x + 2 || move.toX == this.x - 2) && (move.toY == this.y + 2 || move.toY == this.y - 2), "deneme can move")
    if ((((move.toY == this.y + 2) || (move.toY == this.y - 2)) && ((move.toX == this.x + 1) || (move.toX == this.x - 1))) || (((move.toX == this.x + 2) || (move.toX == this.x - 2)) && ((move.toY == this.y + 1) || (move.toY == this.y - 1)))) {
      console.log("Doğru yön");
      if ((move.board[move.toY][move.toX].piece != null)) {
        console.log("Eleman boş");
        // renkler aynı değilse
        if (move.board[move.toY][move.toX].piece.white != this.white) {
          console.log("Aynı reknk değiller");
          return true
        } else return false;
      } else return true;
    } else return false;

  }
}
