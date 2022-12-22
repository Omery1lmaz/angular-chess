import { Piece } from "./Piece";

export class Rook extends Piece {
  constructor(white: boolean, name: string, x: number, y: number) {
    super(white, name,x,y)
  }
  override move(board: any, start: number, end: number, toX: number, toY: number) {
    if (this.canMove(board, start, end, toX, toY)) {
      this.x = toX;
      this.y = toY;
      board[toX][toY].piece = board[this.x][this.y].piece
      board[this.x][this.y].piece = null
      return true;
    } else {
      return false;
    }
  }
  override canMove(board: any, start: number, end: number, toX: number, toY: number) {
    console.log('Board', board)
    console.log(toX, toY, 'TOX TOY ', 'boardboxes', board[4][5]);;
    if (this.white == !board[toX][toY]?.piece?.white) {
      if (toX != start - 1 && toY != end - 1 && this.isAvailable(toX, toY)) {
        return false;
      }
    }
    if ((toX == this.x) && (toY >= 0 && toY <= 7) || ((toY == this.y) && (toX >= 0 && toX <= 7))) {
      return true
    } else { return false }
  }
}
