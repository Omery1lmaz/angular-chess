import { Piece } from "./Piece";

export class Knight extends Piece {
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y)
  }
  override move(board: any, start: number, end: number, toY: number, toX: number) {
    if (this.canMove(board, start, end, toY, toX)) {
      console.log('toX toY', toX, toY);
      console.log('x y', this.x, this.y);
      console.log('At', board[toY][toX]);
      this.x = toX;
      this.y = toY;
      board[toX][toY].piece = board[end][start].piece;
      board[end][start] = null;
      board[toX][toY].piece.x = toY;
      board[toX][toY].piece.y = toX;
      return true;
    } else {
      console.log("Knight Move methodu çaliştirilamadi");
      return false;
    }
  }
  override canMove(board: any, start: number, end: number, toX: number, toY: number) {
    console.log("Knight Move x y", this.x, this.y);
    console.log('TOX TOY ', toX, toY);
    console.log((toX == this.x + 2 || toX == this.x - 2) && (toY == this.y + 2 || toY == this.y - 2), "deneme can move")
    if ((((toY == this.y + 2) || (toY == this.y - 2)) && ((toX == this.x + 1) || (toX == this.x - 1))) || (((toX == this.x + 2) || (toX == this.x - 2)) && ((toY == this.y + 1) || (toY == this.y - 1)))) {
      console.log("Doğru yön");
      if ((board[toY][toX].piece != null)) {
        console.log("Eleman boş");
        // renkler aynı değilse
        if (board[toY][toX].piece.white != this.white) {
          console.log("Aynı reknk değiller");
          return true
        } else return false;
      } else return true;
    } else return false;
    // if (((toY != this.y + 2 || toY != this.y - 2) && (toX != this.x + 1 || toX != this.x - 1))) {
    //   console.log('Yanlış yön 2 ');
    //   return false;
    // }
    // else if ((toX != this.x + 2 || toX != this.x - 2) && (toY != this.y + 1 || toY != this.y - 1)) {
    //   console.log("false yanlış yön");
    //   return false;
    // } else {
    //   console.log("gideceği yerdeki eleman boş mu ?");
    //   if ((board[toY][toX].piece != null)) {
    //     console.log("Eleman boş");
    //     // renkler aynı değilse
    //     if (board[toY][toX].piece.white != this.white) {
    //       console.log("Aynı reknk değiller");
    //       return true
    //     } else return false;
    //   } else return true;
    // }
    // else if ((board[toY][toX].piece != null) && (board[toY][toX].piece.white == this.white)) {
    //   return false;
    // }
    // if ((toX != (start + 3 || start - 3) && toY != (end - 1 || end + 1)) || (toY != (end + 3 || end - 3) && toX != (start - 1 || start + 1)) && this.isAvailable(toX, toY)) {
    //   return false;
    // }
    // if (this.white == !board[toX][toY]?.piece?.white) {
    //   if ((toX == this.x) && (toY >= 0 && toY <= 7) || ((toY == this.y) && (toX >= 0 && toX <= 7))) {
    //     return true
    //   } else { return false }
    // } else { return false }
  }
}
