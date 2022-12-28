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
    console.log("Can Move Çalıştırıldı King")
    /*
    - X yönünde hareket konrolü
    - y yönünde hareket kontrolü
    - çapraz y yönünde hareket kontolü
    - çapraz x yönünde hareket kontrolü
    */
    if ((((move.toX == this.x + 1) || (move.toX == this.x - 1))) && ((move.toY == this.y + 1) || (move.toY == this.y - 1)) || ((move.toX == this.x) && ((move.toY == this.y + 1) || (move.toY == this.y - 1)) || ((move.toY == this.y) && ((move.toX == this.x - 1) || (move.toX == this.x + 1))))) {
      if (this.white == move.board[move.toY][move.toX].piece?.white) {
        console.log("Karşı taraf farklı ");
        return false;
      } else return true;
    } else {
      return false;
    }
  }
}
