import { Piece } from "./Piece";

export class King extends Piece {
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y);
  }

  override move(board: any, start: number, end: number, toX: number, toY: number) {
    if (this.canMove(board, start, end, toX, toY)) {
      board[toY][toX].piece = board[this.y][this.x].piece;
      board[this.y][this.x].piece = null;
      this.x = toX;
      this.y = toY;
      return true;
    } else { return false; }
  }
  override canMove(board: any, start: number, end: number, toX: number, toY: number) {
    console.log("Can Move Çalıştırıldı King")
    /*
    - X yönünde hareket konrolü
    - y yönünde hareket kontrolü
    - çapraz y yönünde hareket kontolü
    - çapraz x yönünde hareket kontrolü
    */
    if ((((toX == this.x + 1) || (toX == this.x - 1))) && ((toY == this.y + 1) || (toY == this.y - 1)) || ((toX == this.x) && ((toY == this.y + 1) || (toY == this.y - 1)) || ((toY == this.y) && ((toX == this.x - 1) || (toX == this.x + 1))))) {
      if (this.white == board[toY][toX].piece?.white) {
        console.log("Karşı taraf farklı ");
        return false;
      } else return true;
    } else {
      return false;
    }
  }
}
