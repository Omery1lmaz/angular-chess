import { Piece } from "./Piece";

export class King extends Piece {
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y);
  }

  override move(board: any, start: number, end: number, toY: number, toX: number) {
    if (this.canMove(board, start, end, toY, toX)) {
      board[toX][toY].piece = board[end][start].piece;
      board[end][start] = null;
      board[toX][toY].piece.x = toY;
      board[toX][toY].piece.y = toX;
      return true;
    } else { return false; }
  }
  override canMove(board: any, start: number, end: number, toX: number, toY: number) {
    console.log("Can Move Çalıştırıldı King")
    // console.log(toX, toY, 'TOX TOY ', 'boardboxes', board[toX][toY]);
    // Hareket doğruysa şartı
    /*
    - X yönünde hareket konrolü
    - y yönünde hareket kontrolü
    - çapraz y yönünde hareket kontolü
    - çapraz x yönünde hareket kontrolü
    */
    if ((((toX == this.x + 1) || (toX == this.x - 1))) || ((toY == this.y + 1) || (toY == this.y - 1)) || ((toX == this.x) && ((toY == this.y + 1) || (toY == this.y - 1)) || ((toY == this.y) && ((toX == this.x - 1) || (toX == this.x + 1))))) {
      if (this.white != board[toY][toX]) {
        console.log("Renkler farklı karşıdaki taşı yiyebilir");
        return true;
      }
      else {
        console.log("Renkler aynı retrun  false");
        return false;
      }
    } else {
      return false;
    }
    // if (this.white == !board[toX][toY].piece?.white) {
    //   if (toX == (this.x + 1 || this.x - 1) || toX == (this.y + 1 || this.y - 1)) { return true }
    // }
    // if (toX != (start - 1 || start + 1) && toY != (end - 1 || end + 1) && this.isAvailable(toX, toY)) {
    //   return false;
    // } else { return false }
  }
}
