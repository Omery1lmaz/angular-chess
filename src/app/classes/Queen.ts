import { Piece } from "./Piece";

export class Queen extends Piece {
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name, x, y)
  }
  override move(board: any, start: number, end: number, toX: number, toY: number) {
    if (this.canMove(board, start, end, toX, toY)) {
      board[end][start].piece.ismoved = true;
      board[toY][toX].piece = board[end][start].piece;
      board[end][start] = null;
      board[toY][toX].piece.x = toX;
      board[toY][toX].piece.y = toY;
      return true;
    } else {
      return false;
    }
  }
  override canMove(board: any, start: number, end: number, toX: number, toY: number) {
    console.log(toX, toY, 'TOX TOY ', 'boardboxes', board[toY][toX]);;
    const absX = toX - this.x;
    const absY = toY - this.y;
    console.log("this available")
    if (Math.abs(absX) == Math.abs(absY)) {
      console.log("mutlak değer eşittir")
      if (this.white != board[toY][toX].piece?.white) {
        console.log("Karşı taraf farklı ");
        return true;
      } else return true;
    } else if ((((toX == this.x) && (toY != this.y)) || ((toY == this.y) && (toX != this.x)))) {
      console.log('DEneme sağa sola gidebilir');
      return true;
    } else return false
  }
}
